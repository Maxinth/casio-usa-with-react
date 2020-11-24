import React from "react";
import useDocumentTitle from "../../components/UseTitle";
import pianoImg from "../../assets/cts-home-mobile.jpg";
import data from "./instrumentsData";
import "./musicalInstrument.css";
import ItemCard from "../ItemCard-PageComponent/ItemCard";
import SharedLayout from "../SharedLayout/SharedLayout";

const MusicalInstruments = () => {
  useDocumentTitle("Electronic Musical Instruments");
  return (
    <section className="musicalInstruments ">
      <SharedLayout
        pageTitle="electronic musical instruments"
        itemType="Electronic Musical Instruments"
        imgShown={pianoImg}
      >
        <div className="musicalInstruments__container">
          <section className="musicalInstruments__body sitePage__content container">
            {data.map((item, index) => (
              <ItemCard {...item} key={index} />
            ))}
          </section>
        </div>
      </SharedLayout>
    </section>
  );
};

export default MusicalInstruments;
