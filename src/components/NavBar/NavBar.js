import React, { useContext, useState } from "react";
import "./navbar.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link, useLocation, NavLink } from "react-router-dom";

import { NavContext } from "../../App";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import NavSearchForm from "./NavSearchForm/NavSearchForm";
import NavProductDetails from "./NavProductDetails/NavProductDetails";
import NavMoreDetails from "./NavMoreDetails/NavMoreDetails";
import NavSupportDetails from "./NavSupportDetails/NavSupportDetails";

const NavBar = () => {
  const { pathname } = useLocation();

  const { whenHovered, whenNotInView, toggleBar, bar } = useContext(NavContext);

  const [toggleSearchBox, setToggleSearchBox] = useState(false);

  const onToggle = () => setToggleSearchBox(!toggleSearchBox);

  // function to set/add the activeClassName on NavLinks based on url-location

  const isThePathCurrently = (currentPath) =>
    pathname === currentPath ? "isActive" : "";

  const { product, more, support } = useContext(NavContext);

  return (
    <>
      <nav className="nav">
        <div className="section container">
          <header className="nav__header ">
            <Link to="/" className="nav__headerLink">
              <div className="nav__logo">
                <img
                  src="https://casiocdn.com/casio-v2/resource/assets/logos/casio-logo.svg"
                  alt="casio logo"
                />
                <em> USA</em>
              </div>
            </Link>

            {/* <section className="nav__right"> */}
            <MenuRoundedIcon className="nav__hamburger" onClick={toggleBar} />
            <section className="nav__menuRight">
              {/* toggle view due to initial searchIcon click */}
              {!toggleSearchBox ? (
                <ul className="nav__menu">
                  <li>
                    <NavLink
                      to="/products"
                      className="nav__navLinks"
                      id="product"
                      onMouseEnter={whenHovered} // set only products to  true so  only its details are shown
                      activeClassName={isThePathCurrently("/products")}
                    >
                      Products
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/support"
                      className="nav__navLinks"
                      id="support"
                      onMouseEnter={whenHovered} // set only support to  true so  only its details are shown
                      activeClassName={isThePathCurrently("/support")}

                      // onMouseLeave={whenNotInView}
                    >
                      Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/news"
                      className="nav__navLinks"
                      onMouseEnter={whenNotInView} // cleanup
                      activeClassName={isThePathCurrently("/news")}
                    >
                      News
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/product-registration"
                      className="nav__navLinks product"
                      onMouseEnter={whenNotInView} // cleanup
                      activeClassName={isThePathCurrently(
                        "/product-registration"
                      )}
                    >
                      Product Registration
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/corporate"
                      className="nav__navLinks final"
                      onMouseEnter={whenNotInView} // cleanup
                      activeClassName={isThePathCurrently("/corporate")}
                    >
                      Corporate
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <NavSearchForm showInitialNav={onToggle} /> // toggle view
              )}

              {!toggleSearchBox && (
                <div className="nav__moreAndSearch">
                  <span
                    className="nav__more"
                    id="more"
                    onMouseEnter={whenHovered} // set only more to  true so  only its details are shown
                  >
                    More
                  </span>

                  <SearchRoundedIcon
                    id="search"
                    onMouseEnter={whenHovered} // set only search to  true so  others become false - backup cleanup
                    onClick={onToggle}
                  />
                </div>
              )}
            </section>

            {/* </section> */}
          </header>
        </div>
      </nav>

      {/* show sidebar when the bar is clicked - 
      
      .mobileSideBar is set at position:  fixed and 
        positioned using the position properties as defined in .mobileSidebar in its css file a
      */}
      {bar && <MobileSideBar />}

      {/* 
      I have moved this section here so it is visible on ALL PAGES when the test conditions are true 
      The css classes .navProductDetails , .navSupportDetails and .navMoreDetails have each been positioned
      absolute relative to .App in their respective css files
      */}

      <section className="showOnHover">
        {product && <NavProductDetails />}
        {support && <NavSupportDetails />}
        {more && <NavMoreDetails />}
      </section>
    </>
  );
};

export default NavBar;

// hovering into any of the other links without a drop - down menu should invoke the whenNotInView function
// for each of these links hover state . This inturn returns all links to the unhovered state.
// - I have commented this as the cleanup
