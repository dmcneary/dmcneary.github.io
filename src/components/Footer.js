import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import File from "@mui/icons-material/FileDownload";
/*import Instagram from "@mui/icons-material/Instagram";*/

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
      <a href='https://www.github.com/dmcneary' target='_blank' rel='noreferrer'>
				<BottomNavigationAction  icon={<GitHub />} sx={ navButtonStyle } />
			</a>
			<a href='https://www.linkedin/com/in/davidmcneary' target='_blank'  rel='noreferrer'>
      	<BottomNavigationAction icon={<LinkedIn />} sx={ navButtonStyle } />
			</a>
			<a href='/David_McNeary_resume.pdf'>
				<BottomNavigationAction icon={<File />} sx={ navButtonStyle } />
      </a>
			{/*<BottomNavigationAction icon={<Instagram />} sx={ navButtonStyle } />*/}
    </BottomNavigation>
  );

export default Footer;
