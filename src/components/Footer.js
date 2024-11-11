import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Tharanee@2024</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <button onClick={handleSubscribe} className="subscribe-button">
          Subscribe
        </button>
        {isSubscribed && <div className="heart-icon">❤️</div>}
      </div>
    </footer>
  );
}

export default Footer;
