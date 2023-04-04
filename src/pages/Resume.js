import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ResumeItem from "../components/ResumeItem";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: "#233",
	},
	timeLine: {
		position: "relative",
		padding: "1rem",
		margin: "o auto",
		"&:before": {
			content: "''",
			position: "absolute",
			height: "100%",
			border: "1px solid tan",
			right: "40px",
			top: 0,
		},
		"&:after": {
			content: "''",
			display: "table",
			clear: "both",
		},
		[theme.breakpoints.up("md")]: {
			padding: "2rem",
			"&:before": {
				left: "calc(50% - 1px)",
				right: "auto",
			},
		},
	},
	
	timeLineYear: {
		textAlign: "center",
		maxWidth: "9.375rem",
		margin: "0 3rem 0 auto",
		fontSize: "1.8rem",
		color: "#fff",
		background: "tomato",
		lineHeight: 1,
		padding: "0.5rem 1rem",
		"&:before": {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			textAlign: "center",
			margin: "0 auto",
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
		padding: "3rem 0",
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

const jobsByYear = [
	{
		year: 2022,
		roles: [
			{
				area: "Web Development",
				company: "Archer Travel Service",
				desc: [
					"Maintained travel agent portal using Ruby on Rails (10k+ users)",
					"Migrated company webpage from Wordpress to React",
					"Cleaned and mitigated malware attacks; hardened security on Wordpress websites",
					"Automated custom video rendering and distribution using Node.js and Adobe products"
				]
			},
		]
	},
	{
		year: 2021,
		roles: [
			{
				area: "IT Support",
				company: "Tseng College at Cal State Northridge",
				desc: [
					"Assisted staff with new software installations and updates",
					"Deployed and configure new hardware assets",
					"Migrated workspaces from remote to on-campus environments"
				]
			},
			{
				area: "Web Development",
				company: "Santa Monica College",
				desc: [
					"Updated and organized assets via CMS",
					"Automated asset migration processes using Node.js",
					"Implemented custom features to vendor widgets using JavaScript"
				]
			},
		]
	},
	{
		year: 2020,
		roles: [
			{
				area: "Teaching Assistant",
				company: "Trilogy Education Services",
				desc: [
					"Oversaw a cohort of 30+ students in a remote learning environment",
					"Taught best practices in MERN stack web development",
					"Used Slack, Canvas, and Zoom  for student/staff coordination and web instruction"
				]
			},
			{
				area: "IT Support",
				company: "Los Angeles County Registrar/Recorder",
				desc: [
					"Provided first-level onsite maintenance and support for 2020 Presidential election",
					"Ensured proper chain of custody for election devices",
					"Coordinated with central help desk to mitigate errors and outages"
				]
			},
			{
				area: "Web Development",
				company: "Think Electric",
				desc: [
					"Implemented updates with breaking changes to a 10-year old customized fork of open-source ERP software using Apache, Perl, PHP, and PostgreSQL"
				]
			},
		]
	},
]

const Resume = () => {
	const classes = useStyles();
	return (
		<motion.div exit={{ opacity: 0 }}>
			<motion.div initial="initial" animate="animate" variants={content}>
				<motion.section variants={elements}>
					<Box component="header" className={classes.mainContainer}>
						<Typography variant="h4" align="center" className={classes.heading}>
							Experience
						</Typography>
						<Box component="div" className={classes.timeLine}>
							{jobsByYear.map(el => (
								<>
									<Typography
										variant="h2"
										className={`${classes.timeLineYear} ${classes.timeLineItem}`}
									>
										{el.year}
									</Typography>
									{el.roles.map(role => <ResumeItem data={role} />) }
								</>
							))}
						</Box>
					</Box>
				</motion.section>
			</motion.div>
		</motion.div>
	);
};

export default Resume;
