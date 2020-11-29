import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link, useLocation } from "react-router-dom";
import "./pageNav.css";
import HomeIcon from "@material-ui/icons/Home";

const PageNavLink = ({ pageTitle }) => {
  const { pathname } = useLocation();

  // check if the path matches one of the following four
  const pathsToCheck =
    pathname === "/products" ||
    pathname === "/news" ||
    pathname === "/support" ||
    pathname === "/corporate";

  // conditionally display page and path name based on url
  const parentPage = pathsToCheck ? "home" : "products";
  const parentPath = pathsToCheck ? "" : "products";
  return (
    <section className="pageNavLink">
      <section className="container">
        <Link to={`/${parentPath}`} className="pageNavLink__link">
          <span className="pageNavLink__parentPage">{parentPage}</span>{" "}
          <HomeIcon />
        </Link>
        <ArrowForwardIosIcon />
        <span className="pageNavLink__pageTitle">{pageTitle}</span>
      </section>
    </section>
  );
};

export default PageNavLink;
