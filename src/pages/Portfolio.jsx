import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from '@mui/icons-material/Link';
import jakksImg from "../images/jakks.webp";
import archerImg from "../images/archer.webp";
import fitImg from "../images/fit-monkeys.webp";
import bamImg from "../images/bamazon.webp";
import bikeImg from "../images/12-cycling-greats.webp";
import tripImg from "../images/tripleclick.webp";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		margin: "5rem auto",
		[theme.breakpoints.up('md')]: {
			margin: "2rem 5vw 0 calc(15em + 5vw)",
		}
	},
	headerContainer: {
		margin: "0 auto 2rem auto",
		overflow: "auto",
		textAlign: "left",
		backgroundColor: "rgba(35,50,51,0.9)",
		borderRadius: "1em",
		padding: "0 1em",
		height: "min-content",
		width: "90%",
		[theme.breakpoints.up('md')]: {
			margin: "10vh 0 2rem 0",
		},
	},
	cardContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "stretch",
		height: "auto",
		width: "clamp(300px, 100%, 500px)",
		margin: "0 auto",
		padding: "3rem",
		[theme.breakpoints.up('md')]: {
			maxHeight: "100vh"
		},
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "stretch",
		height: "100%",
		maxHeight: "max-content",
		width: "100%",
		"& img": {
			objectFit: "contain",
		},
	},
	heading: {
		color: "tomato",
		padding: "1rem 0",
	},
	sectionHeading: {
		color: "tan",
		padding: "1rem 2rem",
		backgroundColor: "#333",
		opacity: 0.9,
		borderRadius: "1rem",
		position: "relative",
		margin: "0 auto",
			width: "fit-content",
	},

}));

const websites = [
	{
		name: "JAKKS Pacific",
		description: "A website for a leading toy manufacturer which features a product catalog, corporate information, and customer service resources.",
		url: "https://jakks.com",
		image: jakksImg,
	},
	{
		name: "Archer Sports Travel",
		description: "Travel info and booking for youth sports teams in the Los Angeles area.",
		url: "https://archersportstravel.com",
		image: archerImg,
	},
];

const projects = [
	{
		name: "Fit Monkeys",
		description: "A fitness tracking app using Leaflet with React, Express, MongoDB, and Node.js.",
		github: "fit-monkeys",
		url: null,
		image: fitImg,
	},
	{
		name: "Bamazon",
		description:
			"A Node.js + MySQL CLI to simulate purchasing bike parts",
		github: "bamazon-cli",
		url: null,
		image: bamImg,
	},
	{
		name: "12 Cycling Greats",
		description: "A memory game using React and TailwindCSS",
		github: "12-cycling-greats",
		url: "https://mcneary.tech/12-cycling-greats",
		image: bikeImg,
	},
	{
		name: "TripleClick",
		description: "A full-stack e-commerce app using MUI with React, Postgres, Express, and Node.js.",
		github: "tripleclick",
		url: null,
		image: tripImg,
	},
];

const Portfolio = () => {
	const classes = useStyles();
	return (
		<Box component="main" className={classes.mainContainer}>
			<Box component="header" className={classes.headerContainer}>
				<Typography className={classes.heading} variant="h2">
					My Portfolio
				</Typography>
			</Box>
			<div className={classes.sectionHeading}>
				<Typography variant="h3">
					Websites
				</Typography>
			</div>
			
			<Grid container sx={{lg:{flexDirection: "row", justifyContent: "center", alignItems: "stretch"}, xs: {flexDirection: "column", alignItems: "center"}}}>
				{/* Websites */}
				{websites.map((site, i) => (
					<Grid className={classes.cardContainer} item xs={12} lg={6} key={i}>
						<Card className={classes.card}>
							<CardMedia
								component="img"
								alt={site.name}
								image={site.image}
								sx={{objectFit: "contain", maxHeight: "70%"}}
							/>
							<CardContent>
								<Typography variant="h5" gutterBottom>
									{site.name}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{site.description}
								</Typography>
							</CardContent>
							<CardActions sx={{alignItems: "center", margin: "0 auto"}}>
								<a href={site.url} target="_blank" rel="noreferrer">
									<LinkIcon sx={{verticalAlign: "middle"}}/>
									<Button size="small" color="primary">
										View website
									</Button>
								</a>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
			<div className={classes.sectionHeading}>
				<Typography variant="h3">
					Projects
				</Typography>
			</div>
			
			<Grid container sx={{ justifyContent: "center", alignItems: "stretch"}}>
				{/* Projects */}
				{projects.map((project, i) => (
					<Grid className={classes.cardContainer} item xs={12} sm={8} md={6} key={i}>
						<Card className={classes.card}>
							<CardMedia
								component="img"
								alt={project.name}
								image={project.image}
							/>
							<CardContent>
								<Typography variant="h5" gutterBottom>
									{project.name}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									{project.description}
								</Typography>
							</CardContent>
							<CardActions sx={{margin: "0 auto"}}>
								{project.url &&
									<a style={{verticalAlign: "bottom"}} href={project.url} target="_blank" rel="noreferrer">
										<LinkIcon sx={{verticalAlign: "middle"}}/>
										<Button size="small" color="primary">
											View website
										</Button>
									</a>}
								{project.github &&
									<a href={`https://www.github.com/dmcneary/${project.github}`}>
										<GitHubIcon sx={{verticalAlign: "middle"}}/>
										<Button size="small" color="primary">
											View on GitHub
										</Button>
									</a>}
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Portfolio;
