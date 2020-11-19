import React, { useState } from "react";
import "./products.css";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import ProductItem from "./ProductItem";
import data from "./productData";

const Products = () => {
  const [toggleProducts, setToggleProducts] = useState(true);

  const toggleOnClick = () => setToggleProducts(!toggleProducts);
  const classOnToggle = toggleProducts ? "isVisible" : "isHidden";
  return (
    <section className="products">
      <h3 className="products__title">
        Products
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

      <div className={`products__moreDetails ${classOnToggle}`}>
        <ul className="products__list">
          {data.map((dataItem) => (
            <ProductItem key={dataItem.title} {...dataItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
