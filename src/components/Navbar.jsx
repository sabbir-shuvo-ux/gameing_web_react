import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="navbar-logo" src="/images/logo.png" alt="logo" />
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* <div className="text-logo-hifi">HIFI</div> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/#home" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-links" onClick={closeMobileMenu}>
                .....
              </a>
            </li>
            <li className="nav-item">
              <a href="/#about" className="nav-links" onClick={closeMobileMenu}>
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#tokenomics"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                TOKENOMICS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/#roadmap"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ROADMAP
              </a>
            </li>
            <li className="nav-item">
              <a href="/#team" className="nav-links" onClick={closeMobileMenu}>
                TEAM
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
