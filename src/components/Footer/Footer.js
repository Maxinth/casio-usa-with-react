import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import LanguageIcon from "@material-ui/icons/Language";
const Footer = () => {
  return (
    <footer className="footer ">
      <section className="container">
        <section className="footer__leftDetails">
          <Link to="/">
            <img
              className="footer__logo"
              src="https://casiocdn.com/casio-v2/resource/assets/logos/casio-logo.svg"
              alt="casio logo"
            />
          </Link>
          <p>&copy; 2020 CASIO AMERICA, INC</p>
          <ul className="footer__nav">
            <li className="footer__listItem">
              <Link to="/" className="footer__link">
                Privacy Policy
              </Link>
            </li>
            <li className="footer__listItem">
              <Link to="/" className="footer__link">
                Terms of Use
              </Link>
            </li>
            <li className="footer__listItem">
              <Link to="/" className="footer__link">
                Sitemap
              </Link>
            </li>
            <li className="footer__listItem">
              <Link to="/" className="footer__link">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
        <section className="footer__rightDetails">
          <p className="footer__rightText">
            <span>USA</span> <LanguageIcon /> Select Country or Region
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
