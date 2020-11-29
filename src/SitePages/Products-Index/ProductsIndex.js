import React from "react";
import Products from "../../components/Products/Products";
import useDocumentTitle from "../../components/UseTitle";
import SharedLayout from "../SharedLayout/SharedLayout";
import "./productIndex.css";
const ProductsIndex = () => {
  useDocumentTitle("Digital Projectors, Pianos, Calculators, Watches");
  return (
    <section className="productIndex">
      <SharedLayout pageTitle="products" heading={<h1>Products</h1>}>
        <section className="productIndex__body sitePage__content">
          <section className="container">
            <Products />
          </section>
        </section>
      </SharedLayout>
    </section>
  );
};

export default ProductsIndex;
