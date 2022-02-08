import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

import "./Navbar.css";

const Navbar = ({ openModal }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  /* while resizing signup button must hide in mobile */

  useEffect(() => {
    showButton();
  }, []);
  /* Modal */

  return (
    <>
      {/*  <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            {/* onClick changing the hamburger menu */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {/* closeMobileMenu is used to close the menus after clicking in mobile */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>

          {button && (
            <Button onClick={openModal} buttonStyle="btn--outline">
              LOG IN
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
