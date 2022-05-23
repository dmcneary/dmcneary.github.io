import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";

const navButtonStyle = {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  };

const Footer = () => (
    <BottomNavigation sx={ {background: "#222"} }>
      <BottomNavigationAction icon={<GitHub />} sx={ navButtonStyle } />
      <BottomNavigationAction icon={<LinkedIn />} sx={ navButtonStyle } />
      <BottomNavigationAction icon={<Instagram />} sx={ navButtonStyle } />
    </BottomNavigation>
  );

export default Footer;
