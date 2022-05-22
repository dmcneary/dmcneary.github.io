import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Menu from "@mui/icons-material/Menu";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import ContactMail from "@mui/icons-material/ContactMail";
import Footer from "../components/Footer";

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = () => (
    <Box component="div" sx={
      {
        width: 250,
        background: "#511",
        height: "100%",
      }
    } 
    >
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <Link to={item.listPath} >
            <ListItem
              sx={ {color: "tan"} }
              button
              key={i}
              onClick={() => setOpen(false)}
            >
                <ListItemIcon sx={ {color: "tan" } }>
                  {item.listIcon}
                </ListItemIcon>
                <ListItemText primary={item.listText} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar sx={ {background: "#222", margin: 0} } position="static">
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <Menu sx={ {color: "tomato"} } />
            </IconButton>
            <Typography sx={ {color: "tan"} } variant="h5">
              Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
