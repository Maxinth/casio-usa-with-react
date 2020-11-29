import React from "react";
import News from "../../components/News/News";
import SharedLayout from "../SharedLayout/SharedLayout";
import data from "./newsIndexData";
import "./newsIndex.css";
import useDocumentTitle from "../../components/UseTitle";
const NewsIndex = () => {
  useDocumentTitle("News");

  return (
    <section className="newsIndex">
      <SharedLayout pageTitle="News">
        <section className="newsIndex__body ">
          <section className="container">
            <h1 className="newsIndex__title">News Release</h1>
            {data.map((item, index) => (
              <News key={index} {...item} />
            ))}
          </section>
        </section>
      </SharedLayout>
    </section>
  );
};

export default NewsIndex;
