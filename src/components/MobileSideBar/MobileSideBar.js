import React, { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NavProductDetails from "../NavBar/NavProductDetails/NavProductDetails";
import "./mobileSideBar.css";
import { useGlobalContext } from "../Context";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  mobileSideBarVariant,
  variantProps,
} from "../variants/varmobileSideBar";
import NavSupportDetails from "../NavBar/NavSupportDetails/NavSupportDetails";

const MobileSideBar = () => {
  const { closeBar, bar } = useGlobalContext();
  // state to toggle details on mobileSideBar
  const [sideDetail, setSideDetail] = useState({
    product: false,
    support: false,
  });
  const toggleProduct = () => {
    setSideDetail({ ...sideDetail, product: !sideDetail.product });
  };

  const toggleSupport = () => {
    setSideDetail({ ...sideDetail, support: !sideDetail.support });
  };

  //   console.log("sidebar = ", sideBar);
  return (
    <motion.section
      className={`mobileSideBar ${bar ? "inView" : "hidden"}`}
      variants={mobileSideBarVariant}
      {...variantProps}

      // hide/ close the sidebar when user moves out of it
      // onMouseLeave={closeBar}
    >
      <CloseIcon onClick={closeBar} className="mobileSideBar__closeIcon" />
      <section className="mobileSideBar__searchBox">
        <form action="/search">
          <input type="text" placeholder="keyword" />

          <SearchRoundedIcon />
        </form>
      </section>
      <section className="mobileSideBar__moreDetails">
        <div className="mobileSideBar__options">
          <Link to="/products" className="mobileSideBar__pageLink">
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
          <Link to="/support" className="mobileSideBar__pageLink">
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
          <Link to="/news" className="mobileSideBar__pageLink">
            News
          </Link>
          <ArrowForwardIosRoundedIcon className="mobileSideBar__icon arrow" />
        </div>
        <div className="mobileSideBar__options">
          <Link
            to="/product-registration"
            className="product-registration mobileSideBar__pageLink"
          >
            Product Registration
          </Link>
          <ArrowForwardIosRoundedIcon className="arrow mobileSideBar__icon" />
        </div>
        <div className="mobileSideBar__corporate">
          <Link to="/corporate" className="mobileSideBar__pageLink corp">
            Corporate{" "}
            <ArrowForwardIosRoundedIcon className="arrow mobileSideBar__icon" />
          </Link>
        </div>
      </section>
    </motion.section>
  );
};

export default MobileSideBar;
