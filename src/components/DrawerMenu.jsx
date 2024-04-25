import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentInd from "@mui/icons-material/AssignmentInd";
import Home from "@mui/icons-material/Home";
import Apps from "@mui/icons-material/Apps";
import ContactMail from "@mui/icons-material/ContactMail";

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const DrawerMenu = ({closeMenu}) => (
	<Box component="nav" sx={
		{
			background: "#511",
			height: "100%",
			padding: "0 1em"
		}
	} 
	>
		<List>
			{menuItems.map(
				item => <Link 
					to={item.listPath}
					key={item.listText}
				>
					<ListItem sx={{borderRadius: "1em", margin: "1em 0", padding: "0.5em", "&:hover": {background: "tomato",}}} onClick={closeMenu}>
						<ListItemIcon sx={ {color: "tan" } }>
							{item.listIcon}
						</ListItemIcon>
						<ListItemText 
							primary={item.listText}
							sx={{
								"&:hover": {
									color: "white",
									textDecoration: "none",
									fontWeight: "bold"
								}
							}}
						/>
					</ListItem>
				</Link>
			)}
		</List>
	</Box>
);

export default DrawerMenu;