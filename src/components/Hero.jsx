import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const heroImgRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    
    // GSAP Animation for Hero Image
    if (heroImgRef.current) {
      gsap.fromTo(heroImgRef.current, 
        { scale: 0.5, opacity: 0, rotation: -5 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section className="hero">
      <div className={`hero-loader ${loaded ? 'hidden' : ''}`}>
        <div className="loader-eye"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title glitch" data-text="SINIKICK">
            <span className="stroke-text">SINI</span>
            <span className="solid-text">KICK</span>
          </h1>
          <p className="hero-subtitle">
            ANIMATOR • GAME ARTIST • STORYBOARDER
          </p>
          <a href="#featured" className="hero-cta">EXPLORE WORK</a>
        </div>
        
        <div className="hero-featured-image">
          <img ref={heroImgRef} src="/assets/image_31_1445298iOtjyhlj.png" alt="Featured Art" className="floating-img" style={{ maxHeight: '60vh', objectFit: 'contain' }} />
          <div className="img-glow"></div>
        </div>
      </div>
    </section>
  );
}
