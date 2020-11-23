import React, { useContext } from "react";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import "./navMoreDetails.css";
import { Link } from "react-router-dom";
import { NavContext } from "../../../App";
const NavMoreDetails = () => {
  const { whenNotInView } = useContext(NavContext);
  return (
    <section className="navMoreDetails" onMouseLeave={whenNotInView}>
      <div className="navMoreDetails__productRegistration">
        Product Registration
      </div>
      <div className="navMoreDetails__corporate">
        <Link to="/corporate">
          Corporate <ArrowForwardIosRoundedIcon />
        </Link>
      </div>
    </section>
  );
};

export default NavMoreDetails;
