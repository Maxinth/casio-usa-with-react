import React from "react";
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

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* routes to pages */}
      <Switch>
        <Route path="/corporate" exact component={Corporate} />
        <Route
          path={["/support", "/product-registration", "/wsd/en/device"]}
          component={SupportIndex}
        />
        <Route path="/news" component={NewsIndex} />
        <Route path="/products" exact component={ProductsIndex} />
        <Route path="/products/watches/pro-trek" component={ProTrek} />
        <Route path="/products/archive/watches" component={ProductArchive} />
        <Route path="/products/accessories" component={ProductAccessories} />
        <Route path="/products/projectors" component={ProductProjectors} />
        <Route
          path="/products/cash-registers"
          component={ProductCashRegister}
        />
        <Route
          path="/products/label-printers"
          component={ProductLabelPrinters}
        />
        <Route path="/products/calculators" component={ProductCalculators} />
        <Route path="/products/watches" exact component={ProductWatches} />
        <Route
          path="/products/electronic-musical-instruments"
          component={MusicalInstruments}
        />
        <Route path="/" exact component={Home} />
      </Switch>
      {/* end of route to pages */}
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default App;
