import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
          <div className="eye-logo">
            <div className="eye-outer">
              <div className="eye-iris">
                <div className="eye-pupil"></div>
              </div>
            </div>
          </div>
          <h1>Sinikick</h1>
        </Link>

        <div className={`nav-links ${isOpen ? 'mobile-active' : ''}`}>
          <Link to="/" className={path === '/' ? 'active' : ''}>Home</Link>
          <Link to="/game-art" className={path === '/game-art' ? 'active' : ''}>Game Art</Link>
          <Link to="/storyboards" className={path === '/storyboards' ? 'active' : ''}>Storyboards</Link>
          <Link to="/compositing" className={path === '/compositing' ? 'active' : ''}>Compositing</Link>
          <Link to="/sketchbook" className={path === '/sketchbook' ? 'active' : ''}>Sketchbook</Link>
          <Link to="/animation" className={path === '/animation' ? 'active' : ''}>2D Animation</Link>
          <Link to="/resume" className={path === '/resume' ? 'active' : ''}>Resume</Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
