import React from "react";

import { Link } from "react-router-dom";
const ProductItem = ({ img, title, goTo }) => {
  const smartOutdoorClass =
    title === "smart outdoor watch CA and US" ? "smart" : "";
  return (
    <li className="products__listItem">
      <Link to={`/products${goTo}`} className="products__link">
        <img src={img} alt={title} className="products__img" />
        <span className={`products__linkTitle ${smartOutdoorClass}`}>
          {title}
        </span>
      </Link>
    </li>
  );
};

export default ProductItem;
