import React from "react";
import { Link } from "react-router-dom";

const QuickList = ({ items, title, path }) => {
  const linkPath =
    title === "products"
      ? "products"
      : title === "support"
      ? "support"
      : "corporate";
  return (
    <section className="quickList">
      <Link to={`/${title}`} className="quickList__title">
        {title}
      </Link>
      <ul className="quickList__nav">
        {items.map((item, index) => (
          <li key={item} className="quickList__listItem">
            <Link
              to={`/${linkPath}/${path[index]}`}
              className="quickList__link"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickList;
