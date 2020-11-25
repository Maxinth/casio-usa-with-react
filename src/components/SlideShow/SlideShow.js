import React, { useContext } from "react";
import "./slideShow.css";
// import testImg from "../../assets/gshock-move-mobile.jpg";
import NavProductDetails from "../NavBar/NavProductDetails/NavProductDetails";
import { NavContext } from "../../App";
import NavSupportDetails from "../NavBar/NavSupportDetails/NavSupportDetails";
import NavMoreDetails from "../NavBar/NavMoreDetails/NavMoreDetails";
import { useLocation } from "react-router-dom";
const SlideShow = ({ imgShown }) => {
  // const [showDetails, setShowDetails] = useState(true)
  const { product, more, support } = useContext(NavContext);
  const { pathname } = useLocation();

  return (
    <>
      <section className="slideShow">
        <img src={imgShown} alt="test watch" />
        {product && <NavProductDetails />}
        {support && <NavSupportDetails />}
        {more && <NavMoreDetails />}
      </section>
      {/* show only when the path matches the one specified below */}
      {pathname === "/products/watches/pro-trek" && (
        <section className="container">
          <p className="proTrek__text">
            Casio’s PRO TREK Smart line of watches is geared for outdoor
            enthusiasts. Powered by Wear OS by Google, these timepieces are
            equipped with a variety of features ideal for outdoor adventures
            including GPS, Location Memory, Moment Setter, and more. These
            timepieces also boast Casio’s Triple Sensor technology, in addition
            to a dual-layer LCD and water resistance. Casio’s PRO TREK Smart
            line offers rugged, stylish and versatile timepieces with features
            that enhance any outdoor experience. For additional information on
            Casio’s PRO TREK Smart line of timepieces.
          </p>
        </section>
      )}
    </>
  );
};

export default SlideShow;
