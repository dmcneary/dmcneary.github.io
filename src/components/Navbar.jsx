import React, { useState } from "react";
import {
	Drawer,
	AppBar,
	Toolbar,
	IconButton,
	Typography
} from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import DrawerMenu from "./DrawerMenu";
import Footer from "./Footer";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const drawer = (
		<>
			<Toolbar />
			<DrawerMenu closeMenu={() => setMobileMenuOpen(false)}/>
    	<Footer />
		</>
	);

  return (
    <>
      <AppBar sx={ {background: "#222", padding: "0.1em", zIndex: (theme) => theme.zIndex.drawer + 1} } position="fixed">
				<Toolbar>
					<IconButton
						sx={{display: {xs: "block", md: "none"}}}
						onClick={() => setMobileMenuOpen(prev => !prev)}
						aria-label="open drawer"
					>
						<Menu sx={{color: "tomato", verticalAlign: "middle"}}/>
					</IconButton>
					<Typography sx={ {color: "tan", marginLeft: "1rem", fontSize: "calc(1em + 1vw)"} } variant="h1">
						David McNeary
					</Typography>
				</Toolbar>
      </AppBar>
      <Drawer
				variant="temporary"
				ModalProps={{
					keepMounted: true,
				}}
				sx={
					{
						display: {xs: "block", md: "none"},
						width: "fit-content",
						[`& .MuiDrawer-paper`]: { border: "0", width:"min-content", boxSizing: 'border-box' }
					}
				}
				open={mobileMenuOpen}
				anchor="left"
				onClose={() => setMobileMenuOpen(false)}
			>
        {drawer}
      </Drawer>
			<Drawer
				variant="permanent"
				sx={
					{
						display: {xs: "none", md: "block"},
						flexShrink: 0,
						width: "min-content",
						[`& .MuiDrawer-paper`]: { border: "0", width: "fit-content", boxSizing: 'border-box' }
					}
				}
				open
			>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
