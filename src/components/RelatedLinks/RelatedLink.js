import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";
const RelatedLink = ({ icon, title, color, goTo }) => {
  return (
    <li className="relatedLinks__listItem">
      <a href={goTo} className="relatedLinks__link" target="__blank">
        <section className="relatedLinks__linkContainer">
          <div className="relatedLinks__mediaIcon" style={{ color: color }}>
            {icon}
          </div>
          <div className="relatedLinks__launchContainer">
            <span>CASIO {title}</span>
            <LaunchIcon className="relatedLinks__launchIcon" />
          </div>
        </section>
      </a>
    </li>
  );
};

export default RelatedLink;
