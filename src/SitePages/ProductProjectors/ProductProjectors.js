import React from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
import projectorBanner from "../../assets/projectorfamily-banners-2.jpg";
import data from "./projectorsData";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import "./projectors.css";
import useDocumentTitle from "../../components/UseTitle";

const ProductProjectors = () => {
  useDocumentTitle("Projectors");
  return (
    <section className="productProjectors">
      <SharedLayout
        imgShown={projectorBanner}
        pageTitle="Projectors"
        itemType="Projectors"
      >
        <section className="productProjectors__body sitePage__content">
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

export default ProductProjectors;
