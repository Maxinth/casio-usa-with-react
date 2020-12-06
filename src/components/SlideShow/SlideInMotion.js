import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slideData from "./slideData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./slideInMotion.css";
const SlideInMotion = () => {
  const [data] = useState(slideData);
  const [index, setIndex] = useState(0);

  // decide what gets displayed
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  // run every five 5mins and consult the first useEffect to determine what gets displayed
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="slideInMotion">
      <section className="slideInMotion__slides">
        {data.map((slide, slideIndex) => {
          const { img, id, title, goTo } = slide;
          let position = "nextSlide";
          if (slideIndex === index) {
            position = "activeSlide";
          }
          if (
            slideIndex === index - 1 ||
            (index === 0 && slideIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={`slideInMotion__slide ${position}`}>
              <Link to={`products/${goTo}`}>
                <img src={img} alt={title} />
              </Link>
            </article>
          );
        })}
      </section>

      <section className="slideInMotion__slideNav">
        <span className="slideInMotion__prev">
          <ArrowBackIosIcon onClick={() => setIndex((index) => index - 1)} />
        </span>
        <span className="slideInMotion__next">
          <ArrowForwardIosIcon onClick={() => setIndex((index) => index + 1)} />
        </span>
      </section>
    </section>
  );
};

export default SlideInMotion;
