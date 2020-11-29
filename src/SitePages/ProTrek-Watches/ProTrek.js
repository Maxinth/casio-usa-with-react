import React from "react";
import SharedLayout from "../SharedLayout/SharedLayout";
import proTrekBanner from "../../assets/protrek-tpd.jpg";
import "./proTrek.css";
import data from "./proTrekData";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import useDocumentTitle from "../../components/UseTitle";

const ProTrek = () => {
  useDocumentTitle("Pro Trek");
  return (
    <section id="proTrek">
      <SharedLayout imgShown={proTrekBanner} pageTitle="pro trek">
        <section className="proTrek__body sitePage__content">
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

export default ProTrek;
