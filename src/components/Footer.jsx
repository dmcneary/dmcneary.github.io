import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import { GitHub, LinkedIn, FileDownload } from "@mui/icons-material";

const iconButtonStyle = {
	color: "text.accent",
  "& .MuiSvgIcon-root": {
    fill: "text.accent",
    "&:hover": {
      fill: "text.primary",
    },
  },
};

const Footer = () => (
  <Box sx={{ backgroundColor: "primary.main",}} style={{ display: "flex", justifyContent: "center", padding: "0.8rem" }}>
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
  </Box>
);

export default Footer;
