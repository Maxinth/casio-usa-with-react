import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import "./HoverDetail.css";
import { motion } from "framer-motion";
import { hoverDetailVariant, variantProps } from "../variants/varHoverDetail";

const HoverDetail = ({ title, itemLinks = [] }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="hoverDetail">
      <h3
        className="hoverDetail__title"
        onClick={() => setShowDetails(!showDetails)}
      >
        {title}
        {/* toggleIcon based on state */}
        {!showDetails ? <ExpandMoreRoundedIcon /> : <ExpandLessRoundedIcon />}
      </h3>
      {showDetails && (
        <motion.ul
          variants={hoverDetailVariant}
          {...variantProps}
          className="hoverDetail__nav"
        >
          {itemLinks.map((item) => (
            <li key={item}>
              <Link to="/" className="hoverDetail__navLinks">
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default HoverDetail;
