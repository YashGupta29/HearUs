import React, { useState } from "react";
import { Link } from "react-scroll";
import "./style.css";
import Logo from "../../images/logo2.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 160) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  return (
    <header id="header" className={scroll ? "header scroll" : "header"}>
      <div className="container navbar">
        <div className="brand">
          <Link to="home">
            <img src={Logo} alt="Brand Logo" className="logo" />
          </Link>
        </div>
        <div className="mobile-menu" onClick={() => setShow(!show)}>
          <i class={show ? "fas fa-times" : "fas fa-grip-lines"}></i>
        </div>
        <div className={show ? "nav-items show" : "nav-items"}>
          <div className="nav-links">
            <Link to="home" className="nav-link" onClick={() => setShow(false)}>
              Home
            </Link>
            <Link
              to="about"
              activeClass="activeLink"
              spy={true}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              About
            </Link>
            <Link
              to="blog"
              activeClass="activeLink"
              spy={true}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              Blog
            </Link>
            <Link
              to="contact"
              activeClass="activeLink"
              spy={true}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              Contact
            </Link>
            <Link
              to="faq"
              activeClass="activeLink"
              spy={true}
              className="nav-link"
              onClick={() => setShow(false)}
            >
              FAQ
            </Link>
          </div>
          <div className="cta">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfMnvB0eVuRvI63OGZvOCH8oiuY6UgQp4mHit0HnNkw8s4X8w/viewform"
              target="_blank"
              className="nav-link nav-btn"
              rel="noreferrer"
            >
              Volunteer as Listener &#10084;
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
