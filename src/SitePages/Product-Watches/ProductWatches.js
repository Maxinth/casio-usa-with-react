import React from "react";
import SlideShow from "../../components/SlideShow/SlideShow";
// import initialImg from "../../assets/watches/Dress_Collection.jpg";
import testImg from "../../assets/gstb300-casio.jpg";
import PageNavLink from "../../components/PageNavLink/PageNavLink";
import NewProductHeader from "../../components/NewProductHeader/NewProductHeader";
import useDocumentTitle from "../../components/UseTitle";
import ProductWatch from "./ProductWatch";
import "./productWatch.css";
import proWatch from "./productWatchesData";
import SupportInfo from "../../components/SupportInfo/SupportInfo";

const ProductWatches = () => {
  useDocumentTitle("Watches");
  return (
    <section className="productWatches ">
      <PageNavLink pageTitle="watches" />
      <SlideShow imgShown={testImg} />
      <NewProductHeader itemType="Watches" />
      <section className="productWatches__all container">
        {proWatch.map((item, index) => (
          <ProductWatch {...item} key={index} />
        ))}
      </section>
      <SupportInfo />
    </section>
  );
};

export default ProductWatches;
