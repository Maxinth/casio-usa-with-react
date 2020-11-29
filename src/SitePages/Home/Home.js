import React, { createContext } from "react";
import NewsReleases from "../../components/News/NewsReleases";
import Products from "../../components/Products/Products";
import testImg from "../../assets/gshock-move-mobile.jpg";
import RelatedLinks from "../../components/RelatedLinks/RelatedLinks";
import SlideShow from "../../components/SlideShow/SlideShow";
import "./Home.css";
import useDocumentTitle from "../../components/UseTitle";

export const NavContext = createContext();

const Home = () => {
  useDocumentTitle("Digital Projectors, Pianos, Calculators, Watches");
  return (
    <section className="home">
      <SlideShow imgShown={testImg} />

      <Products />
      <NewsReleases />
      <RelatedLinks />
    </section>
  );
};

export default Home;
