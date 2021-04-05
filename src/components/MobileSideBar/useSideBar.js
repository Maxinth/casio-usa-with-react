import { useState } from "react";
import { useGlobalContext } from "../Context";

const useSideBar = () => {
  const { closeBar, bar, toggleBar } = useGlobalContext();

  const barClass = bar ? "open" : "close";
  // state to toggle details on mobileSideBar
  const [sideDetail, setSideDetail] = useState({
    product: false,
    support: false,
  });
  const toggleProduct = () => {
    setSideDetail({ ...sideDetail, product: !sideDetail.product });
  };

  const toggleSupport = () => {
    setSideDetail({ ...sideDetail, support: !sideDetail.support });
  };

  return {
    toggleBar,
    barClass,
    toggleProduct,
    toggleSupport,
    closeBar,
    sideDetail,
  };
};

export default useSideBar;
