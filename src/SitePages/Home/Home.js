import React, { useState, createContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Products from "../../components/Products/Products";
import SlideShow from "../../components/SlideShow/SlideShow";
import "./Home.css";
export const NavContext = createContext();

const Home = () => {
  // state for mobile bar
  const [bar, setBar] = useState(false);
  const toggleBar = () => setBar((bar) => !bar);

  const closeBar = () => setBar(false);

  // state for nav items
  const [navItems, setNavItems] = useState({
    product: false,
    support: false,
    more: false,
    search: false,
  });

  const whenHovered = (e) => {
    return setNavItems({
      product: false,
      support: false,
      more: false,
      search: false,
      [e.target.id]: true,
    });
  };

  const whenNotInView = (e) => {
    return setNavItems({
      product: false,
      support: false,
      more: false,
      search: false,
    });
  };

  // console.log(NavContext);
  return (
    <section className="home">
      <NavContext.Provider
        value={{
          ...navItems,
          whenHovered,
          whenNotInView,
          bar,
          toggleBar,
          closeBar,
        }}
      >
        <NavBar />
        <SlideShow />
      </NavContext.Provider>
      <Products />
    </section>
  );
};

export default Home;
