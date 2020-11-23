import React, { createContext } from "react";
// import Footer from "../../components/Footer/Footer";
// import NavBar from "../../components/NavBar/NavBar";
import NewsReleases from "../../components/News/NewsReleases";
import Products from "../../components/Products/Products";
// import QuickLinks from "../../components/QuickLinks/QuickLinks";
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
      {/* <QuickLinks />
      <Footer /> */}
    </section>
  );
};

export default Home;
