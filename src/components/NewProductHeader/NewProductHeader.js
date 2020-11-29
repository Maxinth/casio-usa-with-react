import React from "react";
import newImg from "../../assets/icon_new_blue.png";
import "./newProductsHeader.css";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LaunchIcon from "@material-ui/icons/Launch";
import { useLocation } from "react-router-dom";
const NewProductHeader = ({ itemType }) => {
  const { pathname } = useLocation();
  const isArchivePage = pathname === "/products/archive/watches";
  const isProTrekPage = pathname === "/products/watches/pro-trek";
  const proTrekClass = isProTrekPage ? "hideHeader" : "";

  return (
    // all OTHER pages get to display this section
    <section className={`newProductHeader ${proTrekClass}`}>
      <section
        className={`newProductHeader__new ${isArchivePage ? "archive" : ""}`}
      >
        <div className="newProductHeader__imgContainer">
          <img src={newImg} alt="new" className="newProductHeader__img" />
        </div>
        <h4 className="newProductHeader__title">
          <div>
            <span>New Products</span>
            {itemType && (
              <span className="newProductHeader__itemType">({itemType})</span>
            )}
          </div>
        </h4>
      </section>

      {/* embedding a second section which only gets shown when  pathname === "/products/archive/watches" */}
      {isArchivePage && (
        <section className="newProductHeader__account">
          <AccountCircleOutlinedIcon />
          <span className="newProductHeader__reg">
            Registration <LaunchIcon />
          </span>
        </section>
      )}
    </section>
  );
};

export default NewProductHeader;
