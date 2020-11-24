import React from "react";
import useDocumentTitle from "../../components/UseTitle";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import SharedLayout from "../SharedLayout/SharedLayout";
import data from "./data";
import "./accessories.css";
const ProductAccessories = () => {
  useDocumentTitle("Accessories");
  return (
    <section className="productAccessories">
      <SharedLayout pageTitle="Accessories" itemType="Accessories">
        <section className="productAccessories__body sitePage__content">
          <section className="container">
            {data.map((item, index) => (
              <ItemCard {...item} key={index} />
            ))}
          </section>
        </section>
      </SharedLayout>
    </section>
  );
};

export default ProductAccessories;
