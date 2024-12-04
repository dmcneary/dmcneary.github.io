import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
	AppBar,
	Box,
	Button,
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

import DrawerMenu from "./DrawerMenu";
import Footer from "./Footer";

const styles = {
	appBar: {
		background: "#222",
		padding: "1rem",
	},
	toolbar: {
		justifyContent: "space-between"
	},
	mobileMenuButton: {
		display: { xs: "block", md: "none" }
	},
	mobileMenuButtonIcon: {
		color: "tomato",
		verticalAlign: "middle"
	},
	mobileMenuDrawer: {
		display: { xs: "block", md: "none" },
		width: "fit-content",
		'& .MuiDrawer-paper': { border: "0", width: "min-content", boxSizing: 'border-box' }
	},
	header: {
		color: "tan",
		marginLeft: "1rem",
		fontSize: "calc(1em + 1vw)"
	},
	navItems: {
		display: { xs: 'none', md: 'flex' },
		flexFlow: "row nowrap"
	},
	navItemButton: {
		marginRight: "1rem",
		color: 'tomato',
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		'&:hover': {
			color: 'tan'
		}
	},
};

const navItems = [
	{ listIcon: <Home sx={{ marginRight: "0.5rem" }} />, listText: "Home", listPath: "/" },
	{ listIcon: <AssignmentInd sx={{ marginRight: "0.5rem" }} />, listText: "Resume", listPath: "/resume" },
	{ listIcon: <Apps sx={{ marginRight: "0.5rem" }} />, listText: "Portfolio", listPath: "/portfolio" },
	{ listIcon: <ContactMail sx={{ marginRight: "0.5rem" }} />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const handleCloseMenu = () => setMobileMenuOpen(false);

	return (
		<>
			<AppBar
				component="nav"
				sx={styles.appBar}
				position="sticky"
			>
				<Toolbar sx={styles.toolbar}>
					<Link to="/">
						<Typography sx={styles.header} variant="h1">
							David McNeary
						</Typography>
					</Link>
					<Box sx={styles.navItems}>
						{navItems.map(({ listIcon, listText, listPath }) => (
							<Link to={listPath} key={listText}>
								<Button
									sx={styles.navItemButton}>
									{listIcon}
									{listText}
								</Button>
							</Link>
						))}
					</Box>
					<IconButton
						sx={styles.mobileMenuButton}
						onClick={() => setMobileMenuOpen(prev => !prev)}
						aria-label="open mobile menu drawer"
					>
						<Menu sx={styles.mobileMenuButtonIcon} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					variant="temporary"
					sx={styles.mobileMenuDrawer}
					open={mobileMenuOpen}
					anchor="left"
					onClose={handleCloseMenu}
				>
					<DrawerMenu closeMenu={handleCloseMenu} menuItems={navItems} />
					<Footer />
				</Drawer>
			</nav>
		</>
	);
};

export default Navbar;
