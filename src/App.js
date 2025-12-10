import React, { useState, useEffect } from 'react';
// 1. IMPORT THE SANITY CLIENT
import { client } from '../lib/sanity'; 

import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import ImageViewer from './components/ImageViewer';
import './fonts/VCR_OSD_MONO_1.001.ttf';
import './styles/App.css';

function App() {
  // NEW: State to hold fetched content and loading status
  const [content, setContent] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);

  // ORIGINAL STATE VARIABLES
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showHeaderLogo, setShowHeaderLogo] = useState(true);
  const [showHeaderText, setShowHeaderText] = useState(true);
  const [showFooterLogo, setShowFooterLogo] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showGalleryContent, setShowGalleryContent] = useState(false);
  
  // NEW: useEffect hook for data fetching
  useEffect(() => {
    // GROQ Query to fetch published gallery items
    // IMPORTANT: Replace 'galleryItem' if your schema type is named differently
    // In App.js's useEffect hook:
  const contentQuery = `*[_type == "project"]{ 
    _id,
    title,
    'imageUrl': image.asset->url, // Your schema uses 'image'
    category, // Your schema uses 'category'
    caption, 
    // You can also fetch the link and slug if needed:
    link,
    slug
  }`;

    client.fetch(contentQuery)
      .then((data) => {
        setContent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch content from Sanity:", error);
        setIsLoading(false); 
        // You might set a default empty array or handle the error gracefully here
      });
  }, []); 

  // ORIGINAL FUNCTIONS
  const handleTvClick = () => {
    setShowHeaderLogo(false);
    setShowHeaderText(false);
  
    const tvElement = document.getElementById('tv');
    tvElement.classList.add('enlarged');
  
    setTimeout(() => {
      setShowFooterLogo(true);
      setShowMenu(true);
      setShowGalleryContent(true);
      setShowGallery(true);
    }, 3000);
  };

  const handleCategoryChange = (category) => {
    console.log('Category clicked:', category);
  
    if (category === 'about') {
      setShowAbout(true);
      if (selectedCategory === 'about') {
        setSelectedCategory(null);
        setShowAbout(false); 
      } else {
        setSelectedCategory(category); 
      }
    } else if (category === 'all' || ['photo', 'design', 'dp', 'film'].includes(category)) {
      if (selectedCategory === category) {
        setSelectedCategory(null); 
      } else {
        setShowAbout(false);
        setSelectedCategory(category);
      }
    } else {
      console.log('Invalid click ignored.');
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseViewer = () => {
    setSelectedImage(null);
  };

  // NEW: Render a loading state if data is still fetching
  if (isLoading) {
    return (
        <div className="app" style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            color: 'white', 
            fontSize: '2rem' 
        }}>
            Initializing System...
        </div>
    );
  }

  // ORIGINAL RETURN BLOCK, NOW PASSING 'content' PROP
  return (
    <div className="app">
      <img src={`${process.env.PUBLIC_URL}/xunch.gif`} alt="Background" id="background-video" />

      {!showGallery ? (
        <Header
          onTvClick={handleTvClick}
          showLogo={showHeaderLogo}
          showText={showHeaderText}
        />
      ) : (
        <>
          {/* We assume selectedImage object contains all image data needed */}
          {selectedImage && <ImageViewer image={selectedImage} onClose={handleCloseViewer} />}

          {showAbout ? (
            // You may want to filter 'content' for about-specific data if needed
            <About /> 
          ) : (
            <div className={`gallery-content ${showGalleryContent ? 'fade-in' : ''}`}>
              {/* 2. PASS THE FETCHED CONTENT TO GALLERY */}
              <Gallery 
                content={content} // <--- NEW PROP!
                selectedCategory={selectedCategory} 
                onImageClick={handleImageClick} 
              />
            </div>
          )}

          <Footer
            onCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
            showLogo={showFooterLogo}
            showMenu={showMenu}
            className={showFooterLogo ? "fade-in" : ""}
          />
        </>
      )}
    </div>
  );
}

export default App;