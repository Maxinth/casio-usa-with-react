import React from "react";
import "./itemCard.css";
import LaunchIcon from "@material-ui/icons/Launch";

const ItemCard = ({ img, title, description, price, showLink }) => {
  return (
    <section className="itemCard">
      <section className="itemCard__body">
        <img src={img} alt={title} className="itemCard__img" />
        <span className="itemCard__priceAndText">
          <div className="itemCard__textAndShowLink">
            {/* show the part that follows if a title prop is passed in */}
            {title && <p className="itemCard__text">{title}</p>}
            {/* show the part that follows if a showLink prop is passed in */}
            {showLink && <LaunchIcon className="itemCard__launchIcon" />}
          </div>
          {/* show the part that follows if a price prop is passed in */}
          {price && (
            // <p >
            <p className="ItemCard__price">$ {price}</p>
            // </p>
          )}
        </span>
        {/* show the part that follows if a description prop is passed in */}
        {description && (
          <div className="itemCard__finalSection">{description}</div>
        )}
      </section>
    </section>
  );
};

export default ItemCard;

// By conditionally rendering elements within the Itemcard component, it can be re - used with different
// data values been passed in with a little tweak to the css based on data present
