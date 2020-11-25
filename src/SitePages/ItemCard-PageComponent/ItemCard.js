import React from "react";
import "./itemCard.css";

const ItemCard = ({ img, title, description, price }) => {
  return (
    <section className="itemCard">
      <section className="itemCard__body">
        <img src={img} alt={title} className="itemCard__img" />
        <span className="itemCard__priceAndText">
          {title && <p className="itemCard__text">{title}</p>}
          {price && (
            // <p >
            <p className="ItemCard__price">{price}</p>
            // </p>
          )}
        </span>
        {description && (
          <div className="itemCard__finalSection">{description}</div>
        )}
      </section>
    </section>
  );
};

export default ItemCard;
