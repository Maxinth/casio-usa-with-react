import React from "react";
import useDocumentTitle from "../../components/UseTitle";
import SharedLayout from "../SharedLayout/SharedLayout";
import supportBannerImg from "../../assets/support_category.jpg";
import "./supportIndex.css";
import Products from "../../components/Products/Products";
import { useLocation } from "react-router-dom";

const SupportIndex = () => {
  const { pathname } = useLocation();
  const pageTitleDisplayed =
    pathname === "/support" ? "Support" : "Registration";

  const documentTitle = pathname === "/support" ? "Line" : "Registration";
  useDocumentTitle(`Products ${documentTitle} - Casio`);
  return (
    <section className="supportIndex">
      <SharedLayout
        pageTitle={pageTitleDisplayed}
        imgShown={supportBannerImg}
        heading={<h1>Support</h1>}
      >
        <section className="supportIndex__body">
          <section className="supportIndex__details container">
            <section className="supportIndex__more">
              Due to the COVID-19 Pandemic you may experience delays in parts
              orders and repairs. We are focused on providing you the best level
              of service possible during this difficult time and will do our
              best to provide you the reliable service you have come to expect
              from us. If you have any questions, you may email us at{" "}
              <b>
                <a href="mailto:cms@casio.com">cms@casio.com </a>
              </b>
              or use our Chat option located in the bottom right of this page.
              Chat Hours: <b>Monday-Friday 9:00am to 5:00pm ET</b>.
            </section>
            <Products />
          </section>
          {/* <section className="container">
           
          </section> */}
        </section>
      </SharedLayout>
    </section>
  );
};

export default SupportIndex;
