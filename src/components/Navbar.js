import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-left">
        <a href="#gallery" onClick={() => window.location.reload()}>Image Gallery</a>
      </div>
      <div className="nav-left">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
