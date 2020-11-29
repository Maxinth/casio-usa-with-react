import React, { useState, createContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./SitePages/Home/Home";
import ProductWatches from "./SitePages/Product-Watches/ProductWatches";
import NavBar from "./components/NavBar/NavBar";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import Footer from "./components/Footer/Footer";
import MusicalInstruments from "./SitePages/MusicalInstruments/MusicalInstruments";
import ProductCalculators from "./SitePages/Product-Calculators/ProductCalculators";
import ProductLabelPrinters from "./SitePages/Product-LabelPrinters/ProductLabelPrinters";
import ProductCashRegister from "./SitePages/Product-CashRegisters/ProductCashRegister";
import ProductProjectors from "./SitePages/ProductProjectors/ProductProjectors";
import ProductAccessories from "./SitePages/Product-Accessories/ProductAccessories";
import ProductArchive from "./SitePages/Product-Archive/ProductArchive";
import ProTrek from "./SitePages/ProTrek-Watches/ProTrek";
import ProductsIndex from "./SitePages/Products-Index/ProductsIndex";
import NewsIndex from "./SitePages/NewsIndex/NewsIndex";
import SupportIndex from "./SitePages/Support-Index/SupportIndex";
import Corporate from "./SitePages/Corporate/Corporate";

export const NavContext = createContext();

function App() {
  //state for mobileSideBar
  const [bar, setBar] = useState(false);
  const toggleBar = () => setBar((bar) => !bar);

  const closeBar = () => setBar(false);

  // state for nav items to control when the "more details components (NavMoreDetails NavSupportDetails"
  // and NavProductDetails come into view
  const [navItems, setNavItems] = useState({
    product: false,
    support: false,
    more: false,
    search: false,
  });

  const whenHovered = (e) => {
    // hide the rest and show only the one being hovered on
    return setNavItems({
      product: false,
      support: false,
      more: false,
      search: false,
      [e.target.id]: true,
    });
  };

  const whenNotInView = (e) => {
    // when none  is being hovered on, hide all details
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

        {/* routes to pages */}
        <Switch>
          <Route path="/corporate" exact>
            <Corporate />
          </Route>
          <Route path={["/support", "/product-registration", "/wsd/en/device"]}>
            <SupportIndex />
          </Route>
          <Route path="/news">
            <NewsIndex />
          </Route>
          <Route path="/products" exact>
            <ProductsIndex />
          </Route>
          <Route path="/products/watches/pro-trek">
            <ProTrek />
          </Route>
          <Route path="/products/archive/watches">
            <ProductArchive />
          </Route>
          <Route path="/products/accessories">
            <ProductAccessories />
          </Route>
          <Route path="/products/projectors">
            <ProductProjectors />
          </Route>
          <Route path="/products/cash-registers">
            <ProductCashRegister />
          </Route>
          <Route path="/products/label-printers">
            <ProductLabelPrinters />
          </Route>
          <Route path="/products/calculators">
            <ProductCalculators />
          </Route>
          <Route path="/products/watches" exact>
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
