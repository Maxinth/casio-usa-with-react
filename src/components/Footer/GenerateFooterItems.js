import React from "react";
import FooterListItem from "./FooterListItem";
import { data } from "./data";
const GenerateFooterItems = () => {
  return (
    <>
      {data.map((item) => (
        <FooterListItem key={item} itemName={item} />
      ))}
    </>
  );
};

export default GenerateFooterItems;
