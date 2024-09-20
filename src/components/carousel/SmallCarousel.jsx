import React from 'react'
import SwiperCarousel from './SwiperCarousel'
import './carousel.css'
import {smallSlidesData} from '../../assets/js/data'

const SmallCarousel = () => {
  return (
    <div className='smallCarousel'>
        <div className='carouselHeader'>
        <h1>Newly listed homes in Atlanta</h1>
        </div>
        <div className='bigCarousel'>
      <SwiperCarousel perView={6} skip={6} data={smallSlidesData}/>
    </div>
    </div>
  )
}

export default SmallCarousel;