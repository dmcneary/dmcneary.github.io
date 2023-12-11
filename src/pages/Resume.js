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
		margin: "0 auto",
		fontSize: "1.8rem",
		color: "#fff",
		background: "tomato",
		lineHeight: 1,
		borderRadius: "50%",
		padding: "0.5rem 1rem",
		position: "relative",
		clear: "both",
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
		padding: "3rem 0 0",
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
		year: 2023,
		roles: [
			{
				area: "Web Development",
				company: "JAKKS Pacific Inc.",
				desc: [
					"Migrated company webpage and product catalog content from vanilla PHP into Wordpress, reducing lead times from days to minutes for new web content by using datasheet imports",
					"Currently designing and implementing unified UI for product catalog and e-commerce stores with Wordpress and Shopify headless CMSs",
					'Improved GTMetrix performance score from "C" to "A" by implementing caching techniques',
					"Reduced CDN and WAF costs by 52 percent by integrating with Cloudflare"
				]
			}
		]
	},
	{
		year: 2022,
		roles: [
			{
				area: "Web Development",
				company: "Archer Travel Service",
				desc: [
					"Fielded support requests and bug reports for travel agent portals, built on Ruby on Rails and Wordpress (10k+ users)",
					"Recovered compromised WHM, neutralized webshells, and further hardened Wordpress security",
					"Proof of concept for automated custom video rendering and distribution using AWS, Adobe CC, and Node.js; improved asset request turnaround time to 24 hours from 2 weeks"
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
					"Resolved service requests and software deployments using ServiceNow for 100+ users",
					"Configured and deployed 40+ unit refresh of new laptop assets using SCCM",
					"Performed repairs on projectors, printers, and computer equipment reducing downtime by 50 percent"
				]
			},
			{
				area: "Web Development",
				company: "Santa Monica College",
				desc: [
					"Updated and organized assets via OmniCMS",
					"Automated asset migration processes using Node.js, eliminating need for manual entry and reducing projected completion timeline to 1-2 days from 1-2 weeks",
					"Implemented custom accessibility features to CMS widgets in lieu of submitting request to vendor; previous requests took months for response"
				]
			},
		]
	},
	{
		year: 2020,
		roles: [
			{
				area: "Teaching Assistant",
				company: "Trilogy Education Services (contract)",
				desc: [
					"Oversaw a cohort of 30+ students in a remote learning environment",
					"Taught best practices in MERN stack web development",
					"Used Slack, Canvas, and Zoom  for student/staff coordination and web instruction"
				]
			},
			{
				area: "IT Support",
				company: "Los Angeles County Registrar/Recorder (contract)",
				desc: [
					"Provided first-level onsite maintenance and support for 2020 Presidential election",
					"Ensured proper chain of custody for election devices",
					"Coordinated with central help desk to mitigate errors and outages"
				]
			},
			{
				area: "Web Development",
				company: "Think Electric (internship)",
				desc: [
					"Fixed breaking changes and bugs in custom code while rebasing a 10 year old fork, using Perl and PostgreSQL",
					"Learned ERP processes and SVN version control"
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
							Resume
						</Typography>
						<Typography variant="body2" align="center" style={{ color: "tan" }}>
							*Please note that prior to 2020, I was working in a different field and have omitted that experience from this resume. Contact me if you want to talk about bicycles!
						</Typography>
					<Box component="div" className={classes.timeLine}>
						{jobsByYear.map(el => (
							<>
								<Typography
									variant="h2"
									className={`${classes.timeLineYear}`}
								>
									{el.year}
								</Typography>
								{el.roles.map(role => <ResumeItem className={`${classes.timeLineItem}`} data={role} />) }
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
