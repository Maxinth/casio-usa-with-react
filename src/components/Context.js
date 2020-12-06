import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  //state for mobileSideBar
  const [bar, setBar] = useState(false);

  // functions to change bar state
  const toggleBar = () => setBar((bar) => !bar);
  const closeBar = () => setBar(false);

  // state for nav items to control when the "more details components (NavMoreDetails NavSupportDetails"
  // and NavProductDetails come into view and their respective left offsets
  const [navItems, setNavItems] = useState({
    product: false,
    support: false,
    more: false,
    search: false,
    leftOffset: 0, // which changes based on if the target is the product or support links or more link
  });

  // function to set state of navItems as well as set the current targets left offset
  const whenHovered = (e) => {
    // get coordinate info of the target element
    let temp = e.target.getBoundingClientRect();
    //   get its left offset
    const { left } = temp;

    setNavItems({
      leftOffset: parseInt(left),

      product: false,
      support: false,
      more: false,
      search: false,
      [e.target.id]: true,
    });
  };

  // function to set state when navItems are no longer in view
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
    <AppContext.Provider
      value={{
        ...navItems,
        whenHovered,
        whenNotInView,
        bar,
        toggleBar,
        closeBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// customHook to obtain data from the context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
