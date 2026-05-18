import React from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import portfolioData from '../data.json';

export default function Home() {
  const getValidImages = (categoryKey) => {
    const images = portfolioData[categoryKey]?.images || [];
    return images.filter(img => !img.includes('1445298iOtjyhlj.png'));
  };

  const getRandomImage = (images) => {
    return images.length > 0 ? images[Math.floor(Math.random() * images.length)] : null;
  };

  const sections = [
    { id: 'game-art', title: 'Game Art', images: getValidImages('gameart') },
    { id: 'storyboards', title: 'Storyboards', images: getValidImages('storyboards') },
    { id: 'compositing', title: 'Compositing', images: getValidImages('compositing') },
    { id: 'sketchbook', title: 'Sketchbook', images: getValidImages('sketchbook') },
    { id: 'animation', title: '2D Animation', images: getValidImages('2danimationdemoreel') }
  ];

  // Map each section to a single random image to represent it
  const featuredItems = sections.map(sec => {
    const randomImg = getRandomImage(sec.images);
    if (!randomImg) return null;
    return { id: sec.id, image: randomImg, title: sec.title };
  }).filter(Boolean); // Remove any sections that didn't have valid images

  return (
    <>
      <Hero />
      <Gallery id="featured" title="Featured Work" items={featuredItems} />
    </>
  );
}
