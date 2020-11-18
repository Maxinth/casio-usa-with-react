import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import "./navSearchForm.css";
const NavSearchForm = ({ showInitialNav }) => {
  return (
    <section className="navSearchForm">
      <ArrowBackRoundedIcon onClick={showInitialNav} />
      <form action="/search">
        <input type="text" placeholder="keyword" />

        <SearchRoundedIcon className="navSearchForm__searchIcon" />
      </form>
    </section>
  );
};

export default NavSearchForm;
