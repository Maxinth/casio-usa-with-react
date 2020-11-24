import React from "react";
import "./itemCard.css";

const ItemCard = ({ img, title, description }) => {
  return (
    <section className="itemCard">
      <section className="itemCard__body">
        <img src={img} alt={title} className="itemCard__img" />
        {title && <p className="itemCard__text">{title}</p>}
        {description && (
          <div className="itemCard__finalSection">{description}</div>
        )}
      </section>
    </section>
  );
};

export default ItemCard;
