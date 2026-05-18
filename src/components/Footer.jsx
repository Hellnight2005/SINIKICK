import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="artistic-footer">
      <div className="footer-marquee">
        <div className="marquee-content">
          <span>AVAILABLE FOR FREELANCE WORK • STORYBOARDS • 2D ANIMATION • COMPOSITING • VISUAL DEVELOPMENT • </span>
          <span>AVAILABLE FOR FREELANCE WORK • STORYBOARDS • 2D ANIMATION • COMPOSITING • VISUAL DEVELOPMENT • </span>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand-section">
            <h3 className="footer-mission">Bringing dynamic stories to life frame by frame.</h3>
          </div>
          
          <div className="footer-links-section">
            <div className="glass-cta">
              <h4>SEE THE PROCESS</h4>
              <p>Join the community for behind-the-scenes content.</p>
              <a href="https://youtube.com/@Sinikick" target="_blank" rel="noreferrer" className="yt-subscribe-btn">
                <span className="yt-icon">▶</span>
                SUBSCRIBE ON YOUTUBE
              </a>
            </div>
            
            <div className="footer-socials-modern">
              <a href="https://instagram.com/sinikick" target="_blank" rel="noreferrer" className="artsy-link">
                INSTAGRAM
                <span className="arrow">↗</span>
              </a>
              <a href="mailto:hello@sinikick.com" className="artsy-link">
                CONTACT ME
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-massive-text">
        <h2>SINIKICK</h2>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>© {new Date().getFullYear()} SINIKICK. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
