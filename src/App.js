import React, { useState, createContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./SitePages/Home/Home";
import ProductWatches from "./SitePages/Product-Watches/ProductWatches";
import NavBar from "./components/NavBar/NavBar";
import SlideShow from "./components/SlideShow/SlideShow";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import Footer from "./components/Footer/Footer";
import MusicalInstruments from "./SitePages/MusicalInstruments/MusicalInstruments";

export const NavContext = createContext();

function App() {
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

  return (
    <div className="App">
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
        {/* <SlideShow /> */}
        {/* routes to pages */}
        <Switch>
          <Route path="/products/watches">
            <ProductWatches />
          </Route>

          <Route path="/products/electronic-musical-instruments">
            <MusicalInstruments />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        {/* end of route to pages */}
        <QuickLinks />
        <Footer />
      </NavContext.Provider>
    </div>
  );
}

export default App;
