import React, { useState, useContext } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NavProductDetails from "../NavBar/NavProductDetails/NavProductDetails";
import "./mobileSideBar.css";
import { NavContext } from "../../App";
import CloseIcon from "@material-ui/icons/Close";
import { motion } from "framer-motion";
import {
  mobileSideBarVariant,
  variantProps,
} from "../variants/varmobileSideBar";
import NavSupportDetails from "../NavBar/NavSupportDetails/NavSupportDetails";

const MobileSideBar = () => {
  const { closeBar } = useContext(NavContext);
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
      className="mobileSideBar"
      variants={mobileSideBarVariant}
      {...variantProps}
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
          <span>Products</span>
          {!sideDetail.product ? (
            <AddRoundedIcon onClick={toggleProduct} />
          ) : (
            <RemoveRoundedIcon onClick={toggleProduct} />
          )}
        </div>
        {sideDetail.product && <NavProductDetails />}
        <div className="mobileSideBar__options">
          <span>Support</span>{" "}
          {!sideDetail.support ? (
            <AddRoundedIcon onClick={toggleSupport} />
          ) : (
            <RemoveRoundedIcon onClick={toggleSupport} />
          )}
        </div>
        {sideDetail.support && <NavSupportDetails />}
        <div className="mobileSideBar__options">
          <span>News</span> <ArrowForwardIosRoundedIcon className="arrow" />
        </div>
        <div className="mobileSideBar__options">
          <span className="product-registration">Product Registration</span>
          <ArrowForwardIosRoundedIcon className="arrow" />
        </div>
        <div className="mobileSideBar__corporate">
          <ArrowForwardIosRoundedIcon className="arrow" /> Corporate
        </div>
      </section>
    </motion.section>
  );
};

export default MobileSideBar;
