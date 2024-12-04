import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";

const iconButtonStyle = {
  "& .MuiSvgIcon-root": {
    fill: "tan",
    "&:hover": {
      fill: "tomato",
    },
  },
};

const Footer = () => (
  <div style={{ background: "#222", display: "flex", justifyContent: "center", padding: "0.8rem" }}>
    <Tooltip title="GitHub">
      <IconButton
        href="https://www.github.com/dmcneary"
        target="_blank"
        rel="noreferrer"
        sx={iconButtonStyle}
      >
        <GitHub />
      </IconButton>
    </Tooltip>
    <Tooltip title="LinkedIn">
      <IconButton
        href="https://www.linkedin.com/in/davidmcneary"
        target="_blank"
        rel="noreferrer"
        sx={iconButtonStyle}
      >
        <LinkedIn />
      </IconButton>
    </Tooltip>
    <Tooltip title="Resume">
      <IconButton
        href="/David_McNeary_resume.pdf"
        sx={iconButtonStyle}
      >
        <FileDownload />
      </IconButton>
    </Tooltip>
  </div>
);

export default Footer;
