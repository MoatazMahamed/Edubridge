import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <header id="header">
      <nav className="navbar">
        <a href="#" className="logo">
          Edubridge
        </a>

        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? "active" : ""}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#courses" onClick={() => setIsMenuOpen(false)}>Product</a></li>
            <li><a href="#reviews" onClick={() => setIsMenuOpen(false)}>Review</a></li>
            <li><a href="#join-us" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="account">
            <a href="#">Login</a>
            <a href="#" className="btn-join">Join Us <FaArrowRight /> </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;