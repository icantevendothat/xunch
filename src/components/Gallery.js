import React from 'react';

function Gallery({ selectedCategory, onImageClick, content }) {
  if (!content || content.length === 0) {
    return <div className="grid-container">No images found.</div>;
  }

  const filteredImages = selectedCategory === null || selectedCategory === 'all'
    ? content
    : content.filter(img => img.category === selectedCategory);

  return (
    <div className="grid-container">
      <div className="image-grid">
        {filteredImages.map((image) => (
          <img
            key={image._id} 

            src={image.imageUrl} 
            
            alt={image.title} 
            className="item"
            
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;