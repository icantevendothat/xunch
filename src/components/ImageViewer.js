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

  return (
    <div className="expanded-container active" onClick={onClose}>
      <div className="expanded-image" onClick={e => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
      </div>
      <div className="expanded-caption" dangerouslySetInnerHTML={{ __html: image.caption }} />
      <button className="close-btn" onClick={onClose}>x</button>
    </div>
  );
}

export default ImageViewer;