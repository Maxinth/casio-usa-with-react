import React from "react";
import ProductWatch from "../Product-Watches/ProductWatch";

import SharedLayout from "../SharedLayout/SharedLayout";
import data from "./archiveData";
import "./archive.css";
const ProductArchive = () => {
  return (
    <section className="productArchive">
      <SharedLayout pageTitle="Archives" itemType="Lineup">
        <section className="productArchive__body sitePage_content">
          <section className="container">
            {data.map((item, index) => (
              <ProductWatch {...item} key={index} />
            ))}
          </section>
        </section>
      </SharedLayout>
    </section>
  );
};

export default ProductArchive;
