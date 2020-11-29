import React from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
import banner from "../../assets/corporate.jpg";
import useDocumentTitle from "../../components/UseTitle";
import data from "./corporateData";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import "./corporate.css";
const Corporate = () => {
  useDocumentTitle("Corporate");
  return (
    <section className="corporate">
      <SharedLayout
        imgShown={banner}
        pageTitle="corporate"
        heading={<h1>Corporate</h1>}
      >
        <section className="corporate__body sitePage__content">
          <section className="container">
            {data.map((items, index) => (
              <ItemCard {...items} key={index} showLink={true} />
            ))}
          </section>
        </section>
      </SharedLayout>
    </section>
  );
};

export default Corporate;


// The ItemCard component has been modified to display something else based on if a showLink prop is supplied

// see the ItemCard component to see details