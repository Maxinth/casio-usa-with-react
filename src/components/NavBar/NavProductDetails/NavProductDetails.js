import React from "react";
import HoverDetail from "../HoverDetail";
import "./navProductDetails.css";
import { useGlobalContext } from "../../Context";
const NavProductDetails = () => {
  const { whenNotInView, leftOffset, product } = useGlobalContext();

  return (
    <section
      className={`navProductDetails ${product ? "inView" : ""}`}
      onMouseLeave={whenNotInView}
      style={{ left: `${leftOffset}px` }}
      // on
    >
      {/* when user hovers in views its content via toggle and  HIDE ONLY WHEN THEY HOVER OUT */}
      <HoverDetail
        title="Watches"
        itemLinks={[
          "G-SHOCK",
          "G-Shock Women",
          "BABY-G",
          "EDIFICE",
          "PRO TREK",
          "Vintage",
          "Dress",
          "Classic",
          "Databank",
          "Sports",
          "Wave Ceptor",
          "Accessories",
        ]}
      />
      <HoverDetail
        title="Electronic Musical Instruments"
        itemLinks={[
          "Casiotone",
          "Celviano Grand Hybrid",
          "Console Pianos",
          "Celviano",
          "Privia",
          "Stage Pianos",
          "Workstation Keyboards",
          "Lighted keys",
          "Portable Keyboards",
          "Mini Keyboards",
          "Music Arranger",
          "Apps",
          "Casio Music Education",
          "Accessories",
        ]}
      />

      <HoverDetail
        title="Calculators"
        itemLinks={[
          "Graphing",
          "Fraction & Scientific",
          "Basic",
          "Desktop",
          "Printing",
          "Workbooks",
          "Software & Additional Products",
          "Accessories",
        ]}
      />

      <HoverDetail
        title="Label Printers"
        itemLinks={[
          "Replacement label Tapes",
          "Label Printers & Label Tapes",
          "Accessories",
        ]}
      />

      <HoverDetail
        title="Cash Register"
        itemLinks={["Entry Level", "Mid Line", "Point of Sale"]}
      />

      <HoverDetail
        title="Projectors"
        itemLinks={[
          "Superior Projectors",
          "Core Projectors",
          "Advanced Projectors",
          "4K HD Projectors",
          "Slim Projectors",
          "Ultra Short Throw",
          "Accessories",
        ]}
      />

      <HoverDetail
        title="Accessories"
        itemLinks={[
          "For Projectors",
          "Replacement Label Tapes",
          "For Printing Calculators",
          "For Watches",
          "For Musical Instruments",
        ]}
      />
      {/* <div className="smart">Smart Outdoor CA and US</div> */}
    </section>
  );
};

export default NavProductDetails;

// hovering on the Product Link brings this component into view
// when you enter into this components view and leave, product becomes false again and
// this component again disappears - see the onMouseLeave handler
