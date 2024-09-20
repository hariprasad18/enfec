import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './carousel.css';
import { Navigation } from 'swiper/modules';
import CarouselItem from './CarouselItem';
import { useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';  
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; 

export default function SwiperCarousel({ perView = 1, skip = 1, data = [] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="carousel-container">
      <button ref={prevRef} className="custom-swiper-button-prev" aria-label="Previous">
        <ArrowBackIosIcon />
      </button>
      <button ref={nextRef} className="custom-swiper-button-next" aria-label="Next">
        <ArrowForwardIosIcon />
      </button>

      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          368: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation]}
        slidesPerView={perView}
        slidesPerGroup={skip}
        speed={1000}
        className="mySwiper"
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index}>
            <CarouselItem
              slideType={slide.slideType}
              singleImage={slide.singleImage}
              topImage={slide.topImage}
              bottomImage={slide.bottomImage}
              titleTop={slide.titleTop}
              titleBottom={slide.titleBottom}
              title={slide.title}
              text1={slide.text1}
              text2={slide.text2}
              homeDetails={slide.homeDetails}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
