import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Tharanee@2024</p>
      </div>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div className="subscribe">
        <button>Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;
