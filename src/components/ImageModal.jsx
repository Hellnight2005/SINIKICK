import React, { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import './ImageModal.css';

export default function ImageModal({ image, title, onClose, onNext, onPrev }) {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, onClose]);

  // Reset zoom and position when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [image]);

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale(s => Math.min(s + 0.5, 4));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale(s => Math.max(s - 0.5, 0.5));
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = (e) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-toolbar" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">
          <h2>{title}</h2>
          <a href="https://youtube.com/@Sinikick" target="_blank" rel="noreferrer" className="modal-yt-btn">
            YT Subscribe
          </a>
        </div>
        <div className="modal-controls">
          <button onClick={handleZoomOut}><ZoomOut size={24} /></button>
          <button onClick={resetZoom} className="reset-btn">{Math.round(scale * 100)}%</button>
          <button onClick={handleZoomIn}><ZoomIn size={24} /></button>
          <div className="divider"></div>
          <button onClick={onClose} className="close-btn"><X size={28} /></button>
        </div>
      </div>
      
      <div className="modal-body">
        {onPrev && (
          <button className="nav-arrow prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
            <ChevronLeft size={48} />
          </button>
        )}
        
        <div 
          className={`modal-canvas ${isDragging ? 'dragging' : ''} ${scale > 1 ? 'zoomable' : ''}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img 
            ref={imgRef}
            src={image} 
            alt={title} 
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {onNext && (
          <button className="nav-arrow next" onClick={(e) => { e.stopPropagation(); onNext(); }}>
            <ChevronRight size={48} />
          </button>
        )}
      </div>
    </div>
  );
}
