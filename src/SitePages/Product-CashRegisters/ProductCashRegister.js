import React from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
import bannerImg from "../../assets/PCR-T2500_slider.jpg";
import data from "./cashRegisterData";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import "./cashRegisters.css";
import useDocumentTitle from "../../components/UseTitle";
const ProductCashRegister = () => {
  useDocumentTitle("Cash Registers");
  return (
    <SharedLayout
      imgShown={bannerImg}
      pageTitle="cash registers"
      itemType="Cash Registers"
    >
      <section className="productCashRegister sitePage__content ">
        <section className="container">
          {data.map((item, index) => (
            <ItemCard {...item} key={index} />
          ))}
        </section>
      </section>
    </SharedLayout>
  );
};

export default ProductCashRegister;
