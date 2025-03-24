import React, { useState, useEffect } from 'react';

function Footer({ onCategoryChange, selectedCategory, showLogo, showMenu }) {
  const [menuSrc, setMenuSrc] = useState(`${process.env.PUBLIC_URL}/menu.png`); // Initial value

  useEffect(() => {
    if (selectedCategory === null) {
      setMenuSrc(`${process.env.PUBLIC_URL}/menu.png`); // Show menu.png for 'about'
    } else if (selectedCategory) {
      setMenuSrc(`${process.env.PUBLIC_URL}/${selectedCategory}.png`); // Show category image
    } else {
      setMenuSrc(`${process.env.PUBLIC_URL}/menu.png`); // Show menu.png for initial load
    }
  }, [selectedCategory]);

  const copyEmail = () => {
    navigator.clipboard.writeText("sew9310@nyu.edu");
    alert("Email copied to clipboard!");
  };

  const categories = [
    { name: 'photo', icon: `${process.env.PUBLIC_URL}/photo.png` },
    { name: 'design', icon: `${process.env.PUBLIC_URL}/design.png` },
    { name: 'dp', icon: `${process.env.PUBLIC_URL}/dp.png` },
    { name: 'about', icon: `${process.env.PUBLIC_URL}/about.png` },
    { name: 'film', icon: `${process.env.PUBLIC_URL}/film.png` },
  ];

  return (
    <footer className="footer fade-in">
      <img
        src={`${process.env.PUBLIC_URL}/xunch.png`}
        alt="Xunch Footer Logo"
        className="footer-logo"
        style={{ opacity: showLogo ? 1 : 0, transition: 'opacity 3s ease-in-out'}}
      />
      <div
        className="menu-container"
        style={{ opacity: showMenu ? 1 : 0, transition: 'opacity 3s ease-in-out' }}
      >
        <img
          src={menuSrc}
          alt="Menu"
          id="menu"
          onClick={() => onCategoryChange('all')} // Check this click handler
        />
        {categories.map((category, index) => (
          <div
            key={index}
            className="menu-section"
            onClick={() => onCategoryChange(category.name)} // Check these click handlers
          />
        ))}
      </div>
      <div className="about-icons">
        <a href="https://www.instagram.com/xunch/" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/ig.png`} alt="Instagram" className="about-icon" />
        </a>
        <a href="https://vimeo.com/xunch" target="_blank" rel="noopener noreferrer">
          <img src={`${process.env.PUBLIC_URL}/vimeo.png`} alt="Vimeo" className="about-icon" />
        </a>
        <span onClick={copyEmail}>
          <img src={`${process.env.PUBLIC_URL}/mail.png`} alt="Email" className="about-icon" />
        </span>
      </div>
    </footer>
  );
}

export default Footer;