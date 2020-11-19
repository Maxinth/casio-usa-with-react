import React from "react";
import RssFeedRoundedIcon from "@material-ui/icons/RssFeedRounded";

const NewsReleases = () => {
  return (
    <section className="newsRelease">
      <h4>
        News Release{" "}
        <span>
          <RssFeedRoundedIcon />
          RSS
        </span>
      </h4>
      <section className="newsReleases__news"></section>
    </section>
  );
};

export default NewsReleases;
