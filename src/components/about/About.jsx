import React from 'react';
import { aboutdata } from '../../assets/js/data';
import './about.css';

const About = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>See how Trulia can help</h1>
      <div className='about'>
        {aboutdata && aboutdata.map((item) => (
          <div key={item.id} className='aboutItem'>
            <img src={item.image} alt={item.header} height={150} width={150} />
            <h2>{item.header}</h2>
            <p>{item.text}</p>
            <button className='aboutBtn' aria-label={`Learn more about ${item.header}`}>
              {item.btn}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
