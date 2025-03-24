import React from 'react';

function Header({ onTvClick, showLogo, showText }) {
  return (
    <div className="content">
      <img
        src={`${process.env.PUBLIC_URL}/xunch.png`}
        alt="Xunch Logo"
        className={`logo ${showLogo ? '' : 'fade-out'}`}
      />
      <h1 className={`text-header ${showText ? '' : 'fade-out'}`}>SAM WILBERT</h1>
      <img src={`${process.env.PUBLIC_URL}/tv.gif`} alt="TV" className="tv" id="tv" onClick={onTvClick} />
    </div>
  );
}

export default Header;