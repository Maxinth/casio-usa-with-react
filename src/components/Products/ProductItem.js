import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { productItemHoverVariant } from "../variants/varHoverDetail";
const ProductItem = ({ img, title, goTo }) => {
  const smartOutdoorClass =
    title === "smart outdoor watch CA and US" ? "smart" : "";
  return (
    <motion.li
      variants={productItemHoverVariant}
      whileHover="hover"
      className="products__listItem"
    >
      <Link to={`/products${goTo}`} className="products__link">
        <img src={img} alt={title} className="products__img" />
        <span className={`products__linkTitle ${smartOutdoorClass}`}>
          {title}
        </span>
      </Link>
    </motion.li>
  );
};

export default ProductItem;
