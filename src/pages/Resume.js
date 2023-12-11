import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResumeItem from "../components/ResumeItem";
import { motion } from "framer-motion";
import jobsByYear from "../data/jobs";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
		padding: "1rem",
		textAlign: "start",
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
		border: "0.3em solid tan",
		
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
	heading: {
		color: "tomato",
		textTransform: "uppercase",
	},
}));

const elements = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: [0.6, -0.05, 0.01, 0.99],
		},
	},
};

const content = {
	animate: {
		transition: { staggerChildren: 0.1 },
	},
};

const Resume = () => {
	const classes = useStyles();
	return (
		<motion.div exit={{ opacity: 0 }}>
			<motion.div initial="initial" animate="animate" variants={content}>
				<motion.section variants={elements}>
					<Box component="header" className={classes.mainContainer}>
						<Typography variant="h4" className={classes.heading}>
							My resume
						</Typography>
						<Typography variant="body2" style={{ color: "tan" }}>
							* Please note that prior to 2020, I was working in a different field and have omitted that experience from this resume. Contact me if you want to talk about bicycles!
						</Typography>
					</Box>
					<Box component="main" className={classes.timeLine}>
						{jobsByYear.map(el => (
							<>
								<Typography variant="h2" className={`${classes.timeLineYear}`}>
									{el.year}
								</Typography>
								{el.roles.map(role => <ResumeItem className={`${classes.timeLineItem}`} data={role} />) }
							</>
						))}
					
					</Box>
				</motion.section>
			</motion.div>
		</motion.div>
	);
};

export default Resume;
