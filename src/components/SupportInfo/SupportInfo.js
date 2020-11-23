import React from "react";
import "./supportInfo.css";
import { Link } from "react-router-dom";

const SupportInfo = () => {
  return (
    <section className="supportInfo">
      <div className="supportInfo__container">
        <h3 className="supportInfo__header">Support Information</h3>
        <section className="supportInfo__details">
          <div className="supportInfo__info">
            <Link to="/support/faq" className="supportInfo__link">
              FAQs
            </Link>
          </div>
          <div className="supportInfo__info">
            <Link to="/support/manuals" className="supportInfo__link">
              Manuals
            </Link>
          </div>
          <div className="supportInfo__info">
            <Link to="/support/ios-android" className="supportInfo__link">
              iOS/Android
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SupportInfo;
