import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import "./pageNav.css";
import HomeIcon from "@material-ui/icons/Home";

const PageNavLink = ({ pageTitle }) => {
  return (
    <section className="pageNavLink">
      <section className="container">
        <Link to="/" className="pageNavLink__link">
          <span>Products</span> <HomeIcon />
        </Link>{" "}
        <ArrowForwardIosIcon />
        <span className="pageNavLink__pageTitle">{pageTitle}</span>
      </section>
    </section>
  );
};

export default PageNavLink;
