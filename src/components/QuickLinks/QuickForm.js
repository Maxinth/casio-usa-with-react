import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./quickForm.css";
const QuickForm = () => {
  return (
    <section className="quickForm">
      <section className="quickForm__socialMedia">
        <h3 className="quickForm__text">Follow us</h3>
        <div className="quickForm__socialIcons">
          <FacebookIcon className="quickForm__fb" />
          <TwitterIcon className="quickForm__tw" />
          <YouTubeIcon className="quickForm__yt" />
        </div>
      </section>
      <section className="quickForm__searchBox">
        <form action="/search">
          <input type="text" placeholder="keyword" />

          <SearchRoundedIcon className="quickForm__searchIcon" />
        </form>
      </section>
    </section>
  );
};

export default QuickForm;
