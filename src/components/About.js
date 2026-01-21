import React from 'react';

function About() {
  return (
    <div className="about-content">
      <img src={`${process.env.PUBLIC_URL}/samwil.png`} alt="Sam Wilbert" className="about-image" />
      <div className="about-text">
        <p>
          Sam Wilbert is an NYC based Artist who specializes in videography, 
          photography, and digital art. Sam graduated from NYU Tisch Film & 
          Television and is now looking to work on visuals for musicians, 
          clothing brands, small businesses, and whatever your project is. 
          Click the mail icon to get in touch!
        </p>
      </div>
    </div>
  );
}

export default About;