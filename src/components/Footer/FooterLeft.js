import React from "react";
import { Link } from "react-router-dom";
import GenerateFooterItems from "./GenerateFooterItems";

const FooterLeft = () => {
  return (
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
        <GenerateFooterItems />
      </ul>
    </section>
  );
};

export default FooterLeft;
