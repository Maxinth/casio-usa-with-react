import React from "react";

import PinterestIcon from "@material-ui/icons/Pinterest";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default [
  {
    icon: <FacebookIcon />,
    title: "Facebook",
    color: " rgb(15, 15, 236)",
    goTo: "https://wwww.facebook.com/CasioUSA",
  },
  {
    icon: <TwitterIcon />,
    title: "Twitter",
    color: "rgb(82, 177, 255)",
    goTo:
      "https://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=casio_usa",
  },
  {
    icon: <InstagramIcon />,
    title: "Instagram",
    color: " rgb(185, 76, 153)",
    goTo: "https://www.instagram.com/casio_us",
  },
  {
    icon: <PinterestIcon />,
    title: "Pinterest",
    color: "red",
    goTo: "https://www.pinterest.com/casiousa",
  },
];
