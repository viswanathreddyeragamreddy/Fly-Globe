import React from 'react';
import './Footer.css'; // ✅ Correct import for plain CSS
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTiktok
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="topSection">
        <div className="branding">
          <h2><em>FLYGLOBE</em></h2>
          <p>
            FlyGlobe is more than just a flight booking app; it's your one-stop shop for seamless travel experiences.
          </p>
        </div>

        <div className="links">
          <div>
            <h4>About Us</h4>
            <ul>
              <li>Promo</li>
              <li>Help</li>
              <li>Order</li>
              <li>Contact</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>Career</li>
              <li>Work With Us</li>
              <li>Blog & News</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookies Policy</li>
              <li>Developers</li>
            </ul>
          </div>
        </div>

        <div className="contact">
          <h4>Contact Us</h4>
          <p>flyglobe@gmail.com</p>
          <p>+12 345 678 09</p>
          <p>Singapore, Indonesia</p>

          <h4>Follow Us On Social</h4>
          <div className="socialIcons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
            <FaTiktok />
          </div>
        </div>
      </div>

      <hr />
      <p className="copyright">
        © 2025 FlyGlobe. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
