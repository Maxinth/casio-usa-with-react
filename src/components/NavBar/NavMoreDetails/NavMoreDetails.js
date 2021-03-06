import React from "react";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import "./navMoreDetails.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const NavMoreDetails = () => {
  const { whenNotInView, more, leftOffset } = useGlobalContext();
  return (
    <section
      className={`navMoreDetails ${more ? "inView" : ""}`}
      onMouseLeave={whenNotInView}
      style={{ left: `${leftOffset - 137}px` }}
    >
      <div className="navMoreDetails__productRegistration">
        <Link to="/product-registration">Product Registration</Link>
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

// hovering on the more Link brings this component into view
// when you enter into this components view and leave, product becomes false again and
// this component again disappears - see the onMouseLeave handler
