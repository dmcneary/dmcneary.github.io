import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const DrawerMenu = ({ closeMenu, menuItems }) => (
	<Box
		component="nav"
		sx={
			{
				background: "#511",
				height: "100%",
				padding: "0 1em"
			}
		}
	>
		<List>
			{menuItems.map(
				item => (
					<ListItem
						key={item.listText}
						onClick={closeMenu}
						sx={
							{
								borderRadius: "0.75rem",
								margin: "1rem 0",
								padding: "0.5rem 1rem",
								"&:hover": {
									background: "#222",
								}
							}
						}
					>
						<Link to={item.listPath}>
							<ListItemIcon
								sx={
									{
										color: "tan",
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center'
									}
								}
							>
								{item.listIcon}
							</ListItemIcon>
						</Link>
						<Link to={item.listPath}>
							<ListItemText
								primary={item.listText}
								sx={
									{
										"&:hover": {
											color: "white",
											textDecoration: "none",
											fontWeight: "bold",
											display: "inline-block"
										}
									}
								}
							/>
						</Link>
					</ListItem>
				)
			)}
		</List>
	</Box>
);


export default DrawerMenu;