import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";

const navButtonStyle = {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
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
				<BottomNavigationAction icon={<FileDownload />} sx={ navButtonStyle } />
      </a>
    </BottomNavigation>
  );

export default Footer;
