import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterListItem = ({ itemName }) => {
  return (
    <li className="footer__listItem">
      <Link to="/" className="footer__link">
        {itemName}
      </Link>
    </li>
  );
};

FooterListItem.propTypes = {
  itemName: PropTypes.string,
};

export default FooterListItem;
