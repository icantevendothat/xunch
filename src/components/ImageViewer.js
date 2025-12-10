import React, { useEffect } from 'react';

function ImageViewer({ image, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Handle case where 'image' might be undefined or null initially
  if (!image) {
    return null;
  }

  return (
    <div className="expanded-container active" onClick={onClose}>
      <div className="expanded-image" onClick={e => e.stopPropagation()}>
        {/*
          CHANGE: Use image.imageUrl (from Sanity GROQ)
          CHANGE: Use image.title (from Sanity schema)
        */}
        <img src={image.imageUrl} alt={image.title} />
      </div>
      
      {/* image.caption is correct and handles HTML for links */}
      <div className="expanded-caption" dangerouslySetInnerHTML={{ __html: image.caption }} />
      
      <button className="close-btn" onClick={onClose}>x</button>
    </div>
  );
}

export default ImageViewer;