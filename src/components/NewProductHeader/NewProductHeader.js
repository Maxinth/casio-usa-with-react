import React from "react";
import newImg from "../../assets/icon_new_blue.png";
import "./newProductsHeader.css";
const NewProductHeader = ({ itemType }) => {
  return (
    <section className="newProductHeader">
      <div className="newProductHeader__imgContainer">
        <img src={newImg} alt="new" className="newProductHeader__img" />
      </div>
      <h4 className="newProductHeader__title">
        New Products
        <span className="newProductHeader__itemType">({itemType})</span>
      </h4>
    </section>
  );
};

export default NewProductHeader;
