import React from "react";
import useDocumentTitle from "../../components/UseTitle";
import testImg from "../../assets/fx-CG500.jpg";
import "./productCalculators.css";
import SharedLayout from "../SharedLayout/SharedLayout";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import data from "./productCalculatorsData";

const ProductCalculators = () => {
  useDocumentTitle("Calculators");
  return (
    <section className="productCalculators">
      <section className="productCalculators__content">
        <SharedLayout
          pageTitle="calculators"
          imgShown={testImg}
          itemType="Calculators"
        >
          <section className="productCalculators__body sitePage__content ">
            <section className="container">
              {data.map((item, index) => (
                <ItemCard key={index} {...item} />
              ))}
            </section>
          </section>
        </SharedLayout>
      </section>
    </section>
  );
};

export default ProductCalculators;
