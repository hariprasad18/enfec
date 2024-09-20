import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const CarouselItem = ({
  topImage,
  bottomImage,
  singleImage,
  slideType,
  title,
  titleTop,
  titleBottom,
  text1,
  text2,
  homeDetails = {} 
}) => {
  const { cost, facilities, address, company } = homeDetails;

  const RenderButton = ({ label }) => (
    <button aria-label={`View ${label}`}>
      {label} <KeyboardArrowRightIcon />
    </button>
  );

  const RenderTextBox = ({ text }) => (
    <div className='textBox'>
      <p>{text.title}</p>
      <h6>{text.caption}</h6>
      <h4>{text.text}</h4>
    </div>
  );

  const HomeDetailBox = () => (
    <div className='homeDetails'>
      <h2>{cost}</h2>
      <p className='facilities'>
        <BedIcon />&nbsp; {facilities?.beds} &nbsp; 
        <BathtubIcon /> &nbsp;{facilities?.baths} &nbsp; 
        <SpaceDashboardIcon /> &nbsp;{facilities?.size}
      </p>
      <p>{address}</p>
      <p>{company}</p>
    </div>
  );

  return (
    <>
      {slideType === 'single' ? (
        <div className='carouselItem'>
          <div className='singleImage' style={{ backgroundImage: `url(${singleImage})` }}>
            <h2>{title}</h2>
            <RenderButton label="View Homes" />
          </div>
        </div>
      ) : slideType === 'dual' ? (
        <div className='carouselItem dualCarouselItem'>
          <div className='topSection' style={{ backgroundImage: `url(${topImage})` }}>
            <h2>{titleTop}</h2>
<<<<<<< HEAD
            {topImage  && <RenderButton label="View Homes" />}
=======
            {topImage && !homeDetails && <RenderButton label="View Homes" />}
>>>>>>> ed465798f5d4796b2151670e2413700f82c1b735
            {text1 && <RenderTextBox text={text1} />}
          </div>
          <div className='bottomSection' style={{ backgroundImage: `url(${bottomImage})` }}>
            <h2>{titleBottom}</h2>
            {bottomImage && <RenderButton label="View Homes" />}
            {text2 && <RenderTextBox text={text2} />}
          </div>
        </div>
      ) : (
        <div className='smallCarouselItem'>
  <div className='smallCtopSection' style={{ backgroundImage: `url(${topImage})` }}>
    <p className='new'>New</p>
    <p className='smallImageTitle'>{title}</p>
  </div>
  <div className='smallCbottomSection'>
    <HomeDetailBox />
  </div>
</div>
      )}
    </>
  );
};

export default CarouselItem;
