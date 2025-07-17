import React, { useEffect, useState } from 'react';
import './Hero.css'
import banner1 from '../Assets/banner1.jpg';
import banner2 from '../Assets/banner2.jpg';
import banner3 from '../Assets/banner3.jpg';

const images = [banner1, banner2, banner3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="home-content">
        <h1>Welcome to TrendStyle</h1>
        <p>Discover the latest fashion in men's and women's clothing</p>
        <div className="home-buttons">
          <a href="/mens" className="explore-btn">Shop Men</a>
          <a href="/womens" className="explore-btn">Shop Women</a>
        </div>
      </div>
    </div>
  );
}































































// import React from 'react'
// import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from'../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'

// export default function Hero() {
//   return (
//     <div className='hero'>
      

//              <div className="hero-left">
//               <h2>New Arrivals Only</h2>
//                   <div>
//                          <div className="hero-hand-icon">
//                              <p>New</p>
//                              <img src={hand_icon} alt="" />
//                           </div>
//                           <p>Collections</p>
//                           <p>for everyone</p>
//                    </div>
//                             <div className='hero-latest-btn'>
//                                  <div>Latest Collection</div>
//                                     <img src={arrow_icon} alt="" />
//                               </div>
//                     </div>
//                                   <div className="hero-right">
//                                     <img src={hero_image} alt="" />

      
//                                    </div>
//     </div>
//   )
// }
