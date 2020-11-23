import React, { useContext } from "react";
import "./slideShow.css";
// import testImg from "../../assets/gshock-move-mobile.jpg";
import NavProductDetails from "../NavBar/NavProductDetails/NavProductDetails";
import { NavContext } from "../../App";
import NavSupportDetails from "../NavBar/NavSupportDetails/NavSupportDetails";
import NavMoreDetails from "../NavBar/NavMoreDetails/NavMoreDetails";

const SlideShow = ({ imgShown }) => {
  // const [showDetails, setShowDetails] = useState(true)
  const { product, more, support } = useContext(NavContext);

  return (
    <section className="slideShow">
      <img src={imgShown} alt="test watch" />
      {product && <NavProductDetails />}
      {support && <NavSupportDetails />}
      {more && <NavMoreDetails />}
    </section>
  );
};

export default SlideShow;
