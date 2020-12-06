import React from "react";
import { Link } from "react-router-dom";
import "./navSupportDetails.css";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { useGlobalContext } from "../../Context";
const NavSupportDetails = () => {
  const { whenNotInView, leftOffset, support } = useGlobalContext();
  return (
    <section
      className={`navSupportDetails ${support ? "inView" : ""}`}
      onMouseLeave={whenNotInView}
      style={{ left: `${leftOffset}px` }}
    >
      {/* when user hovers in views its content via toggle and  HIDE ONLY WHEN THEY HOVER OUT */}
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

// hovering on the Support Link brings this component into view
// when you enter into this components view and leave, product becomes false again and
// this component again disappears - see the onMouseLeave handler
