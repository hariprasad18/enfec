import React from 'react';
import './carousel.css';
import { slidesData } from '../../assets/js/data';
import SwiperCarousel from './SwiperCarousel';

const Carousel = () => {
  return (
    <div className='carouselContainer'>
      <header className='carouselHeader'>
        <h1>Explore homes on Trulia</h1>
        <p>Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews, and local insights to find what is right for you.</p>
      </header>
      <div className='bigCarousel'>
        <SwiperCarousel perView={4.5} skip={5} data={slidesData} />
      </div>
    </div>
  );
}

export default Carousel;
