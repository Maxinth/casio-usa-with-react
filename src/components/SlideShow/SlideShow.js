import React, { useContext } from "react";
import "./slideShow.css";
import testImg from "../../assets/gshock-move-mobile.jpg";
import NavProductDetails from "../NavBar/NavProductDetails/NavProductDetails";
import { NavContext } from "../../SitePages/Home/Home";
import NavSupportDetails from "../NavBar/NavSupportDetails/NavSupportDetails";
import NavMoreDetails from "../NavBar/NavMoreDetails/NavMoreDetails";

const SlideShow = () => {
  // const [showDetails, setShowDetails] = useState(true)
  const { product, more, support, search } = useContext(NavContext);

  return (
    <section className="slideShow">
      <img src={testImg} alt="test watch" />
      {product && <NavProductDetails />}
      {support && <NavSupportDetails />}
      {more && <NavMoreDetails />}
    </section>
  );
};

export default SlideShow;
