import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/fa";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img
            src="https://gateway.pinata.cloud/ipfs/QmX2Vwkym49geStTGSLKvd6PPFfNDyRrPsgr1tsu5PMRsC"
            alt="Logo"
            className="logo"
          />
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Link 1
                </a>
                <span>
                  <svg
                    class="remixicon-icon cursor-pointer"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
                  </svg>
                </span>
                <ul className="dropdown">
                  <li>
                    <a href="#" className="dropdown-link">
                      Sublink 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-link">
                      Sublink 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Link 1
                </a>
                <span>
                  <svg
                    class="remixicon-icon cursor-pointer"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
                  </svg>
                </span>
                <ul className="dropdown">
                  <li>
                    <a href="#" className="dropdown-link">
                      Sublink 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-link">
                      Sublink 2
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="right-side">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
          <div>
            {" "}
            <button className="header-button">Join Discord</button>{" "}
          </div>
        </div>
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        {menuActive ? "Close" : "Menu"}
      </button>

      <nav className={`nav ${menuActive ? "nav-mobile active" : "nav-mobile"}`}>
        {/* ... */}
      </nav>
    </header>
  );
};

export default Header;
