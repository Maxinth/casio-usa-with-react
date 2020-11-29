import React from "react";
import NewProductHeader from "../../components/NewProductHeader/NewProductHeader";
import PageNavLink from "../../components/PageNavLink/PageNavLink";
import SlideShow from "../../components/SlideShow/SlideShow";
import SupportInfo from "../../components/SupportInfo/SupportInfo";
import { useLocation } from "react-router-dom";
import "./sharedLayout.css";
const SharedLayout = ({ children, pageTitle, imgShown, itemType, heading }) => {
  const { pathname } = useLocation();
  // hiding supportInfo using css
  const isParentPage =
    pathname === "/products" ||
    pathname === "/corporate" ||
    pathname === "/support" ||
    pathname === "/news" ||
    pathname === "/product-registration";

  return (
    <>
      <PageNavLink pageTitle={pageTitle} />
      {heading && <div className="shared__heading">{heading}</div>}
      {imgShown && <SlideShow imgShown={imgShown} />}
      {itemType && <NewProductHeader itemType={itemType} />}
      {children}

      {/*show  <SupportInfo /> for all other paths except the ones specified in isParentPage */}

      {!isParentPage && <SupportInfo />}
    </>
  );
};

export default SharedLayout;

// A component housing contents common to most pages - the different part being the children element

/* 
    By conditionally showing elements based on if heading, 
    imgShown , itemType props are passed  and isParentPage match, the SharedLayout component can
    be re-used over and over to display different layouts
 */
