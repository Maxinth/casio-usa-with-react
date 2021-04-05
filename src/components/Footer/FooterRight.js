import React from "react";
import LanguageIcon from "@material-ui/icons/Language";

const FooterRight = () => {
  return (
    <section className="footer__rightDetails">
      <p className="footer__rightText">
        <span>USA</span> <LanguageIcon /> Select Country or Region
      </p>
    </section>
  );
};

export default FooterRight;
