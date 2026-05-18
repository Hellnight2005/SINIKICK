import React from 'react';
import Gallery from '../components/Gallery';

export default function CategoryPage({ title, items, ytLink, drive }) {
  const getEmbedUrl = (url) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch')) {
      try {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
      } catch (e) {
        return null;
      }
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('drive.google.com')) {
      return url.replace(/\/view.*$/, '/preview');
    }
    return url;
  };

  const ytEmbed = getEmbedUrl(ytLink);
  const driveEmbed = getEmbedUrl(drive);

  // Check if there are valid images (ignoring any leftover placeholder images named with '1445298iOtjyhlj.png')
  const validItems = items ? items.filter(item => !item.image.includes('1445298iOtjyhlj.png')) : [];
  const hasImages = validItems.length > 0;

  return (
    <div className="category-page" style={{ paddingTop: '2rem', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>

      {!hasImages && (
        <div className="container" style={{ textAlign: 'center', marginBottom: '1rem', marginTop: '1rem' }}>
          <h2 className="section-title">{title}</h2>
          <div className="section-line" style={{ margin: '0 auto 2rem auto' }}></div>
        </div>
      )}

      {(ytEmbed || driveEmbed) && (
        <div className={`video-wrapper-section ${hasImages ? 'with-images' : 'without-images'}`}>
          {ytEmbed && (
            <div className="video-iframe-container">
              <iframe
                src={ytEmbed}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            </div>
          )}
          {driveEmbed && (
            <div className={`video-iframe-container ${ytEmbed ? 'has-top-margin' : ''}`}>
              <iframe
                src={driveEmbed}
                allow="autoplay"
                allowFullScreen
                title="Google Drive Video"
              ></iframe>
            </div>
          )}
        </div>
      )}

      {hasImages && (
        <Gallery id={title.toLowerCase().replace(' ', '-')} title={title} items={validItems} />
      )}
    </div>
  );
}
