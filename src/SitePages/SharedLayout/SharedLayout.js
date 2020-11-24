import React from "react";
import NewProductHeader from "../../components/NewProductHeader/NewProductHeader";
import PageNavLink from "../../components/PageNavLink/PageNavLink";
import SlideShow from "../../components/SlideShow/SlideShow";
import SupportInfo from "../../components/SupportInfo/SupportInfo";

const SharedLayout = ({ children, pageTitle, imgShown, itemType }) => {
  return (
    <>
      <PageNavLink pageTitle={pageTitle} />
      {imgShown && <SlideShow imgShown={imgShown} />}
      <NewProductHeader itemType={itemType} />
      {children}
      <SupportInfo />
    </>
  );
};

export default SharedLayout;
