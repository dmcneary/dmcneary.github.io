import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Box,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import {
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	Menu
} from "@mui/icons-material";
import Button from "./Button";
import DrawerMenu from "./DrawerMenu";
import Footer from "./Footer";

const navItems = [
	{ listIcon: <Home />, listText: "Home", listPath: "/" },
	{ listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
	{ listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
	{ listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const handleCloseMenu = () => setMobileMenuOpen(false);

	return (
		<>
			<AppBar
				component="nav"
				position="sticky"
				sx={{
					backgroundColor: "secondary.main",
					padding: "1rem",
				}}
			>
				<Toolbar sx={{ justifyContent: "space-between" }}>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Typography 
							variant="h1" 
							sx={{ 
								marginLeft: "1rem",
								color: "text.primary",
							}}
						>
							David McNeary <br />
						</Typography>
					</Link>
					
					<Box sx={{ 
						display: { xs: 'none', md: 'flex' },
						flexFlow: "row nowrap"
					}}>
						{navItems.map(({ listIcon, listText, listPath }) => (
							<Link 
								to={listPath} 
								key={listText}
								style={{ textDecoration: 'none' }}
							>
								<Button
									variant="text"
									startIcon={listIcon}
									sx={{ marginRight: "1rem" }}
								>
									{listText}
								</Button>
							</Link>
						))}
					</Box>

					<IconButton
						onClick={() => setMobileMenuOpen(prev => !prev)}
						aria-label="open mobile menu drawer"
						sx={{
							display: { xs: "block", md: "none" },
							"& .MuiSvgIcon-root": {
								color: "secondary.main",
								verticalAlign: "middle"
							}
						}}
					>
						<Menu />
					</IconButton>
				</Toolbar>
			</AppBar>

			<Drawer
				variant="temporary"
				open={mobileMenuOpen}
				anchor="left"
				onClose={handleCloseMenu}
				sx={{
					display: { xs: "block", md: "none" },
					width: "fit-content",
					"& .MuiDrawer-paper": { 
						border: "0", 
						width: "min-content", 
						boxSizing: 'border-box' 
					}
				}}
			>
				<DrawerMenu closeMenu={handleCloseMenu} menuItems={navItems} />
				<Footer />
			</Drawer>
		</>
	);
};

export default Navbar;
