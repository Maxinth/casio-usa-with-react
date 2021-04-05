import React from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NavProductDetails from "../NavBar/NavProductDetails/NavProductDetails";
import "./mobileSideBar.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import NavSupportDetails from "../NavBar/NavSupportDetails/NavSupportDetails";
import useSideBar from "./useSideBar";

const MobileSideBar = () => {
  const {
    toggleBar,
    barClass,
    toggleProduct,
    toggleSupport,
    closeBar,
    sideDetail,
  } = useSideBar();

  return (
    <section className={`mobileSideBar ${barClass}`}>
      <CloseIcon onClick={toggleBar} className="mobileSideBar__closeIcon" />
      <section className="mobileSideBar__searchBox">
        <form action="/search">
          <input type="text" placeholder="keyword" />

          <SearchRoundedIcon />
        </form>
      </section>
      <section className="mobileSideBar__moreDetails">
        <div className="mobileSideBar__options">
          <Link
            to="/products"
            className="mobileSideBar__pageLink"
            onClick={closeBar}
          >
            Products
          </Link>
          {/* toggling the icon based on if the product details are in view */}
          {!sideDetail.product ? (
            <AddRoundedIcon
              onClick={toggleProduct}
              className="mobileSideBar__icon"
            />
          ) : (
            <RemoveRoundedIcon
              onClick={toggleProduct}
              className="mobileSideBar__icon"
            />
          )}
        </div>
        {/* show if true */}
        {sideDetail.product && <NavProductDetails />}
        <div className="mobileSideBar__options">
          <Link
            to="/support"
            className="mobileSideBar__pageLink"
            onClick={closeBar}
          >
            Support
          </Link>
          {/* toggling the icon based on if the support details are in view */}
          {!sideDetail.support ? (
            <AddRoundedIcon
              onClick={toggleSupport}
              className="mobileSideBar__icon"
            />
          ) : (
            <RemoveRoundedIcon
              onClick={toggleSupport}
              className="mobileSideBar__icon"
            />
          )}
        </div>
        {/* show if true */}
        {sideDetail.support && <NavSupportDetails />}
        <div className="mobileSideBar__options">
          <Link
            to="/news"
            className="mobileSideBar__pageLink"
            onClick={closeBar}
          >
            News
          </Link>
          <ArrowForwardIosRoundedIcon className="mobileSideBar__icon arrow" />
        </div>
        <div className="mobileSideBar__options">
          <Link
            to="/product-registration"
            className="product-registration mobileSideBar__pageLink"
            onClick={closeBar}
          >
            Product Registration
          </Link>
          <ArrowForwardIosRoundedIcon className="arrow mobileSideBar__icon" />
        </div>
        <div className="mobileSideBar__corporate">
          <Link
            to="/corporate"
            className="mobileSideBar__pageLink corp"
            onClick={closeBar}
          >
            Corporate{" "}
            <ArrowForwardIosRoundedIcon className="arrow mobileSideBar__icon" />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default MobileSideBar;
