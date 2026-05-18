import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Resume from './pages/Resume';
import portfolioData from './data.json';

function App() {
  const gameArt = portfolioData.gameart?.images?.map((img, i) => ({ id: `game_${i}`, image: img, title: img.split('/').pop() })) || [];
  const storyboards = portfolioData.storyboards?.images?.map((img, i) => ({ id: `story_${i}`, image: img, title: img.split('/').pop() })) || [];
  const compositing = portfolioData.compositing?.images?.map((img, i) => ({ id: `comp_${i}`, image: img, title: img.split('/').pop() })) || [];
  const sketchbook = portfolioData.sketchbook?.images?.map((img, i) => ({ id: `sketch_${i}`, image: img, title: img.split('/').pop() })) || [];
  const animation = portfolioData['2danimationdemoreel']?.images?.map((img, i) => ({ id: `anim_${i}`, image: img, title: img.split('/').pop() })) || [];

  return (
    <BrowserRouter>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game-art" element={<CategoryPage title="Game Art" items={gameArt} ytLink={portfolioData.gameart?.ytLink} drive={portfolioData.gameart?.drive} />} />
          <Route path="/storyboards" element={<CategoryPage title="Storyboards" items={storyboards} ytLink={portfolioData.storyboards?.ytLink} drive={portfolioData.storyboards?.drive} />} />
          <Route path="/compositing" element={<CategoryPage title="Compositing" items={compositing} ytLink={portfolioData.compositing?.ytLink} drive={portfolioData.compositing?.drive} />} />
          <Route path="/sketchbook" element={<CategoryPage title="Sketchbook" items={sketchbook} ytLink={portfolioData.sketchbook?.ytLink} drive={portfolioData.sketchbook?.drive} />} />
          <Route path="/animation" element={<CategoryPage title="2D Animation" items={animation} ytLink={portfolioData['2danimationdemoreel']?.ytLink} drive={portfolioData['2danimationdemoreel']?.drive} />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
