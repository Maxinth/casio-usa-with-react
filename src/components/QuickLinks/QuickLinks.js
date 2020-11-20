import React from "react";
import data from "./quickLinksData";
import "./quickLinks.css";
import QuickList from "./QuickList";
import QuickForm from "./QuickForm";

const QuickLinks = () => {
  const { news, products, support } = data;
  return (
    <section className="quickLinks container">
      {/* <section className="container"> */}
      <QuickList {...products} />
      <QuickList {...support} />
      <QuickList {...news} />
      <QuickForm />
      {/* </section> */}
    </section>
  );
};

export default QuickLinks;
