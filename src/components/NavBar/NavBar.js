import React, { useContext, useState } from "react";
import "./navbar.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link } from "react-router-dom";
import { NavContext } from "../../SitePages/Home/Home";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import NavSearchForm from "./NavSearchForm/NavSearchForm";

const NavBar = () => {
  const { whenHovered, whenNotInView, toggleBar, bar } = useContext(NavContext);

  const [toggleSearchBox, setToggleSearchBox] = useState(false);

  const onToggle = () => setToggleSearchBox(!toggleSearchBox);

  const classOnSearchToggle = toggleSearchBox
    ? "logoAndSearch"
    : "logoAndNavLinks";
  return (
    <>
      <nav className="nav">
        <div className="section container">
          <header className={`nav__header ${classOnSearchToggle}`}>
            <div className="nav__logo">
              <img
                src="https://casiocdn.com/casio-v2/resource/assets/logos/casio-logo.svg"
                alt="casio logo"
              />
              <em> USA</em>
            </div>

            {/* <section className="nav__right"> */}
            <MenuRoundedIcon className="nav__hamburger" onClick={toggleBar} />
            <section className="nav__menuRight">
              {!toggleSearchBox ? (
                <ul className="nav__menu">
                  <li>
                    <Link
                      to="/products"
                      className="nav__navLinks"
                      id="product"
                      onMouseEnter={whenHovered}
                      // onMouseLeave={whenNotInView}
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/support"
                      className="nav__navLinks"
                      id="support"
                      onMouseEnter={whenHovered}
                      // onMouseLeave={whenNotInView}
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="nav__navLinks"
                      onMouseEnter={whenNotInView} // cleanup
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/product-registration"
                      className="nav__navLinks product"
                      onMouseEnter={whenNotInView} // cleanup
                    >
                      Product Registration
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/corporate"
                      className="nav__navLinks final"
                      onMouseEnter={whenNotInView} // cleanup
                    >
                      Corporate
                    </Link>
                  </li>
                </ul>
              ) : (
                <NavSearchForm showInitialNav={onToggle} />
              )}

              {!toggleSearchBox && (
                <div className="nav__moreAndSearch">
                  <span
                    className="nav__more"
                    id="more"
                    onMouseEnter={whenHovered}
                    // onMouseLeave={whenNotInView}
                  >
                    More
                  </span>

                  <SearchRoundedIcon
                    id="search"
                    onMouseEnter={whenHovered}
                    onClick={onToggle}
                    // onMouseLeave={whenNotInView}
                  />
                </div>
              )}
            </section>

            {/* </section> */}
          </header>
        </div>
      </nav>
      {bar && <MobileSideBar />}
    </>
  );
};

export default NavBar;

// hovering into any of the other links without a drop - down menu should invoke the whenNotInView function
// for each of these links hover state . This inturn returns all links to the unhovered state.
// - I have commented this as the cleanup
