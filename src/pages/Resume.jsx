import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResumeItem from "../components/ResumeItem";
import jobsByYear from "../data/jobs";

const useStyles = makeStyles((theme) => ({
	main: {
		height: "100vh",
		margin: "0",
		[theme.breakpoints.up('md')]: {
			margin: "0 5% 0 25%",
		}
	},
	headerContainer: {
		marginTop: "10vh",
		marginRight: "auto",
		marginLeft: "auto",
		overflow: "auto",
		textAlign: "left",
		backgroundColor: "rgba(35,50,51,0.9)",
		borderRadius: "1em",
		padding: "1em",
		height: "min-content",
		width: "90%",
		[theme.breakpoints.up('md')]: {
			padding: "2em",
		},
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "0 auto",
		/*"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},*/
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				content: "''",
				position: "absolute",
				height: "100%",
				border: "1px solid tan",
				right: "50vw",
				top: 0,
				left: "calc(50% - 1px)",
			},
		},
	},
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 auto !important",
		fontSize: "1.8rem !important",
		color: "#fdd",
		background: "tomato",
		lineHeight: 1,
		borderRadius: "1rem",
		padding: "0.5rem 1rem",
		position: "relative",
		clear: "both",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			"&:nth-of-type(2n)": {
				float: "none",
				margin: "0 auto",
			},
			"&:nth-of-type(2n):before": {
				display: "none",
			},
		},
	},
	timeLineItem: {
		border: "10px solid tomato",
	},
	heading: {
		color: "tomato",
		padding: "1rem 0"
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component="main" className={classes.main}>
			<Box component="header" className={classes.headerContainer}>
				<Typography className={classes.heading} sx={{ display: "block" }} variant="h2" gutterBottom>
					My Resume
				</Typography>
				<Typography sx={{md: {maxWidth: "50%"}}} variant="body2" style={{ color: "tan" }}>
					* Please note, I have omitted some prior experience from this resume. Feel free to contact me if you want to talk about bicycles!
				</Typography>
			</Box>
			<Box component="main" className={classes.timeLine}>
				{jobsByYear.map(el => (
					<React.Fragment key={el.year}>
						<Typography variant="h2" className={`${classes.timeLineYear}`}>
							{el.year}
						</Typography>
						{el.roles.map(role => <ResumeItem key={`${role.company}-${role.area}`}className={`${classes.timeLineItem}`} data={role} />)}
					</React.Fragment>
				))}

			</Box>
		</Box>
	);
};

export default Resume;
