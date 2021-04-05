import React from "react";
import "./footer.css";
import FooterRight from "./FooterRight";
import FooterLeft from "./FooterLeft";

const Footer = () => {
  return (
    <footer className="footer ">
      <section className="container">
        <FooterLeft />
        <FooterRight />
      </section>
    </footer>
  );
};

export default Footer;
