import React from 'react';

// 1. Component now accepts 'content' prop from App.js
function Gallery({ selectedCategory, onImageClick, content }) {
  // If content is null, undefined, or empty, show nothing (or a loading message)
  if (!content || content.length === 0) {
    return <div className="grid-container">No images found.</div>;
  }

  // 2. Use the 'content' prop instead of the hardcoded 'images' array
  const filteredImages = selectedCategory === null || selectedCategory === 'all'
    ? content
    : content.filter(img => img.category === selectedCategory);

  return (
    <div className="grid-container">
      <div className="image-grid">
        {filteredImages.map((image) => (
          <img
            // It's best practice to use a unique ID from the CMS, like _id, for the key
            key={image._id} 
            
            // 3. Use 'imageUrl' from the Sanity fetch (as defined in App.js query)
            // This replaces the old 'image.src' which pointed to the public folder.
            src={image.imageUrl} 
            
            alt={image.title} // Use title as alt text
            className="item"
            
            // Pass the entire image object when clicked
            onClick={() => onImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;