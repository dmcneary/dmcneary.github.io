import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResumeItem from "../components/ResumeItem";
import jobsByYear from "../data/jobs";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		maxWidth: "80%",
		margin: "0 auto",
	},
	headerContainer: {
		background: "#233",
		height: "100%",
		marginTop: "1rem",
		padding: "1rem",
		border: "10px solid tan",
		borderRadius: "1rem",
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
		color: "#fff",
		background: "tomato",
		lineHeight: 1,
		borderRadius: "50%",
		border: "0.1em solid tan",

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
		padding: "3rem 0",
		textTransform: "uppercase",
		display: "block",
	},
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<Box component="main" className={classes.mainContainer}>
			<Box component="header" className={classes.headerContainer}>
			<Typography className={classes.heading} sx={{display: "block"}} variant="h2" gutterBottom>
				My Resume
			</Typography>
			<Typography variant="body2" style={{ color: "tan" }}>
				* Please note that prior to 2020, I was working in a different field and have omitted that experience from this resume. Feel free to contact me if you want to talk about bicycles!
			</Typography>
			</Box>
			<Box component="main" className={classes.timeLine}>
				{jobsByYear.map(el => (
					<>
						<Typography variant="h2" className={`${classes.timeLineYear}`}>
							{el.year}
						</Typography>
						{el.roles.map(role => <ResumeItem className={`${classes.timeLineItem}`} data={role} />)}
					</>
				))}

			</Box>
		</Box>
	);
};

export default Resume;
