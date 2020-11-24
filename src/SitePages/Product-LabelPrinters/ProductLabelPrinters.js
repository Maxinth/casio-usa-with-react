import React from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
import bannerImg from "../../assets/label-tape-bannerv2.jpg";
import data from "./labelPrinterData";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import "./labelPrinter.css";
import useDocumentTitle from "../../components/UseTitle";

const ProductLabelPrinters = () => {
  useDocumentTitle("Label Printers");
  return (
    <section className="productLabelPrinters">
      <SharedLayout
        imgShown={bannerImg}
        itemType="Label Printers"
        pageTitle="label printers"
      >
        <section className="productLabelPrinters__body sitePage__content">
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

export default ProductLabelPrinters;
