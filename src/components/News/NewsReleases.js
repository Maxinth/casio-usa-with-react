import React from "react";
import RssFeedRoundedIcon from "@material-ui/icons/RssFeedRounded";
import News from "./News";
import "./newsReleases.css";
import data from "./newsData";

const NewsReleases = () => {
  return (
    <section className="newsRelease">
      <section className="container">
        <h4 className="newsRelease__header">
          <span className="newsRelease__newsTitle">News Release</span>
          <div className="newsRelease__RSS">
            <RssFeedRoundedIcon className="newsRelease__rssIcon" />
            RSS
          </div>
        </h4>
        <section className="newsReleases__news">
          <ul className="newsReleases__newsNav">
            {data.map((item, index) => (
              <News key={index} {...item} />
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default NewsReleases;
