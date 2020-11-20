import React from "react";
import "./relatedLinks.css";
import data from "./relatedLinksData";
import RelatedLink from "./RelatedLink";

const RelatedLinks = () => {
  return (
    <section className="relatedLinks">
      <section className="container">
        <h3 className="relatedLinks__header">Related Links</h3>
        <section className="relatedLinks__socialMedia">
          <ul className="relatedLinks__socialMediaNav">
            {data.map((item) => (
              <RelatedLink key={item.title} {...item} />
            ))}
          </ul>
        </section>
      </section>
    </section>
  );
};

export default RelatedLinks;
