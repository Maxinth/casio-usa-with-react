import React from "react";
import PageNavLink from "../../components/PageNavLink/PageNavLink";
import NewProductHeader from "../../components/NewProductHeader/NewProductHeader";
import SupportInfo from "../../components/SupportInfo/SupportInfo";
import useDocumentTitle from "../../components/UseTitle";
import SlideShow from "../../components/SlideShow/SlideShow";
import pianoImg from "../../assets/cts-home-mobile.jpg";
import testPiano from "../../assets/testPiano.jpg";
import data from "./instrumentsData";
import "./musicalInstrument.css";

const MusicalInstruments = () => {
  useDocumentTitle("Electronic Musical Instruments");
  return (
    <section className="musicalInstruments ">
      <PageNavLink pageTitle="electronic musical instruments" />
      <SlideShow imgShown={pianoImg} />
      <NewProductHeader itemType="Electronic Musical Instruments" />
      <div className="musicalInstruments__container">
        <section className="musicalInstruments__body sitePage__content container">
          {data.map((item, index) => (
            <MusicalInstrument {...item} key={index} />
          ))}
        </section>
      </div>
      <SupportInfo />
    </section>
  );
};

const MusicalInstrument = ({ img, pianoType, description }) => {
  return (
    <section className="piano">
      <section className="piano__body">
        <img src={img} alt="piano" className="piano__img" />
        {pianoType && <p className="piano__text">{pianoType}</p>}
        {description && (
          <div className="piano__finalSection">{description}</div>
        )}
      </section>
    </section>
  );
};

export default MusicalInstruments;
