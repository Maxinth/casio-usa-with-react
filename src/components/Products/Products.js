import React, { useState } from "react";
import "./products.css";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import ProductItem from "./ProductItem";
import data from "./productData";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  toggleProductsVariant,
  variantProps,
} from "../variants/toggleProductVariant";
// import {toggleProductVariant}/

const Products = () => {
  const { pathname } = useLocation();
  const [toggleProducts, setToggleProducts] = useState(true);

  const toggleOnClick = () => setToggleProducts(!toggleProducts);
  const classOnToggle = toggleProducts ? "isVisible" : "isHidden";

  const productTitle =
    pathname === "/support"
      ? "Product Line"
      : pathname === "/product-registration"
      ? "Products Registration"
      : "Products";

  return (
    <section className="products">
      <section className="container">
        <h3 className="products__title">
          {productTitle}
          {!toggleProducts ? (
            <AddRoundedIcon
              className="products__toggleIcon"
              onClick={toggleOnClick}
            />
          ) : (
            <RemoveRoundedIcon
              className="products__toggleIcon"
              onClick={toggleOnClick}
            />
          )}
        </h3>

        <motion.div
          variants={toggleProductsVariant}
          {...variantProps}
          className={`products__moreDetails ${classOnToggle}`}
        >
          <ul className="products__list">
            {data.map((dataItem) => (
              <ProductItem key={dataItem.title} {...dataItem} />
            ))}
          </ul>
        </motion.div>
      </section>
    </section>
  );
};

export default Products;
