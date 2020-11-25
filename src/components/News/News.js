import React from "react";
import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
const News = ({ date, title }) => {
  return (
    <li className="newsRelease__listItem">
      <Link to="/" className="newsRelease__link">
        <section className="newsRelease__newsItem">
          <h3 className="newsRelease__listItemHeader">
            <span className="newsRelease__time">{date}</span>
            <span className="newsRelease__timePiece">Timepiece</span>
          </h3>
          <p className="newsRelease__newsTitleMore">
            <span className="newsRelease__titleText">{title}</span>
            <ArrowForwardIosRoundedIcon />
          </p>
        </section>
      </Link>
    </li>
  );
};

export default News;
