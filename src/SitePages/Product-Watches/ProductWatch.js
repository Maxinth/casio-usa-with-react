import React from "react";

const ProductWatch = ({ img, brand }) => {
  return (
    <section className="productWatch">
      <section className="productWatch__container">
        <img src={img} alt="" className="productWatch__img" />

        <div className="productWatch__brandContainer">
          <img src={brand} alt="brand" className="productWatch__brand" />
        </div>
      </section>
    </section>
  );
};

export default ProductWatch;
