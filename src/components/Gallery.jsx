import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';
import ImageModal from './ImageModal';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery({ id, title, items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Return early if no items
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      // Create slight variations in the animation based on the section's id length/content
      const yOffset = id.length % 2 === 0 ? 60 : 100;
      const rotationOffset = id.includes('sketch') ? 4 : (id.length % 3 === 0 ? -3 : 2);
      const scaleStart = id.includes('game') ? 0.7 : 0.9;
      
      gsap.fromTo('.gallery-item', 
        { y: yOffset, opacity: 0, rotation: rotationOffset, scale: scaleStart },
        { 
          y: 0, 
          opacity: 1, 
          rotation: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [id, items]);

  const handleNext = () => {
    if (currentIndex !== null && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <section id={id} ref={sectionRef} className="gallery-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="section-line"></div>
          
          <div className="gallery-grid">
            {items.map((item, idx) => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => setCurrentIndex(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="gallery-img-container">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="gallery-overlay">
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {currentIndex !== null && items[currentIndex] && (
        <ImageModal 
          image={items[currentIndex].image} 
          title={items[currentIndex].title} 
          onClose={() => setCurrentIndex(null)}
          onNext={currentIndex < items.length - 1 ? handleNext : null}
          onPrev={currentIndex > 0 ? handlePrev : null}
        />
      )}
    </>
  );
}
