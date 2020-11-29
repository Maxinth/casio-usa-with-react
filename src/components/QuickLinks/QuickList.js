import React from "react";
import { Link } from "react-router-dom";

const QuickList = ({ items, title, path }) => {
  const linkPath =
    title === "products"
      ? "products"
      : title === "support"
      ? "support"
      : "corporate";

  const newsClass = items.length === 1 ? "news" : "";
  return (
    <section className="quickList">
      <Link to={`/${title}`} className="quickList__title">
        {title}
      </Link>
      <ul className="quickList__nav">
        {items.map((item, index) => (
          <li key={item} className="quickList__listItem">
            <Link
              to={
                title === "news"
                  ? `/${linkPath}`
                  : `/${linkPath}/${path[index]}`
              }
              // to={`/${linkPath}/${path[index]}`}
              className={`quickList__link ${newsClass}`}
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
