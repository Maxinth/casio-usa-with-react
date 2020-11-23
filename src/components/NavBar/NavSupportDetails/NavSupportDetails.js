import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navSupportDetails.css";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { NavContext } from "../../../App";
const NavSupportDetails = () => {
  const { whenNotInView } = useContext(NavContext);
  return (
    <section className="navSupportDetails" onMouseLeave={whenNotInView}>
      <ul className="navSupportDetails__nav">
        <li className="navSupportDetails__listItem">
          <Link to="/support/watches">
            <span>Watches Support</span> <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/wsd/en/device">
            <span>Smart Outdoor Watch Support </span>{" "}
            <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/support/electronic-musical-instruments">
            <span>Electronic Musical Instruments Support</span>
            <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/support/product-support">
            <span>DJ Products Support </span> <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/support/calculators">
            <span>Calculators Support</span> <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/support/projectors">
            <span>Projectors Support</span> <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/support/cash-register">
            <span>Cash Registers Support</span> <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
        <li className="navSupportDetails__listItem">
          <Link to="/support/label-printers">
            <span>Label Printers Support</span> <ArrowForwardIosRoundedIcon />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavSupportDetails;
