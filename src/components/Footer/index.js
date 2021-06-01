import React from "react";
import "./style.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer class="footer" id="footer">
      <div class="container">
        <div class="row f-row">
          <div class="footer-col">
            <h4>HearUs</h4>
            {/* <h4>Important Links</h4> */}
            <ul>
              <li>
                <Link to="about" className="i-link">
                  About us
                </Link>
              </li>

              <li>
                <Link to="contact" className="i-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="faq" className="i-link">
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          {/* <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
              <li>
                <a href="#">App Development</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
            </ul>
          </div> */}
          <div class="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">+91 9844652458</a>

                <a href="#">+91 9911145878</a>
              </li>
              <li>
                <a href="#">example@gmail.com</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>follow us</h4>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="copyright">
            &copy; Copyright <span>HearUs</span>. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
