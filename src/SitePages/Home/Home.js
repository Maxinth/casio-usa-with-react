import React, { createContext } from "react";
import NewsReleases from "../../components/News/NewsReleases";
import Products from "../../components/Products/Products";
import RelatedLinks from "../../components/RelatedLinks/RelatedLinks";
import "./Home.css";
import useDocumentTitle from "../../components/UseTitle";
import SlideInMotion from "../../components/SlideShow/SlideInMotion";
// import SlideShow from "../../components/SlideShow/SlideShow";

export const NavContext = createContext();

const Home = () => {
  useDocumentTitle("Digital Projectors, Pianos, Calculators, Watches");
  return (
    <section className="home">
      <SlideInMotion />
      {/* <SlideShow /> */}
      <Products />
      <NewsReleases />
      <RelatedLinks />
    </section>
  );
};

export default Home;
