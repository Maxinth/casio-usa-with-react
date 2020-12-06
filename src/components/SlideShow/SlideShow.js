import React from "react";
import "./slideShow.css";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { slideImageVariant, variantProps } from "../variants/slideImageVariant";

const SlideShow = ({ imgShown }) => {
  const { pathname } = useLocation();

  return (
    <>
      <motion.section
        variants={slideImageVariant}
        {...variantProps}
        className="slideShow"
      >
        <img src={imgShown} alt="test watch" />
      </motion.section>
      {/* show only when the path matches the one specified below */}
      {pathname === "/products/watches/pro-trek" && (
        <section className="container">
          <p className="proTrek__text">
            Casio’s PRO TREK Smart line of watches is geared for outdoor
            enthusiasts. Powered by Wear OS by Google, these timepieces are
            equipped with a variety of features ideal for outdoor adventures
            including GPS, Location Memory, Moment Setter, and more. These
            timepieces also boast Casio’s Triple Sensor technology, in addition
            to a dual-layer LCD and water resistance. Casio’s PRO TREK Smart
            line offers rugged, stylish and versatile timepieces with features
            that enhance any outdoor experience. For additional information on
            Casio’s PRO TREK Smart line of timepieces.
          </p>
        </section>
      )}
    </>
  );
};

export default SlideShow;
