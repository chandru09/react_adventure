import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Col, Row, Toast } from "react-bootstrap";

import "./Navbar.css";

import PopupCart from "./PopupCart";

const Navbar = ({ openModal, cart, setCartItem }) => {
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

  /* PopOver */
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  /* PopOver END */
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
              <Link to="/quiz" className="nav-links" onClick={closeMobileMenu}>
                Quiz
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-links"
                onClick={closeMobileMenu}
                style={{ paddingRight: "0px" }}
              >
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <div
                onClick={toggleShowA}
                className="mb-2 nav-links"
                style={{ padding: "0px" }}
              >
                <AiOutlineShoppingCart size={27} />
              </div>
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
        <Row>
          <Col md={12} className="">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <strong className="me-auto">Cart</strong>
                <small></small>
              </Toast.Header>
              <Toast.Body>
                <PopupCart cart={cart} setCart={setCartItem} />
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      </nav>
    </>
  );
};
export default Navbar;
