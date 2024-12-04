import React from "react";
import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
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
		margin: "1rem auto",
		display: "flex",
		flexFlow: "column nowrap",
		justifyContent: "center",
		alignItems: "center",
		width: '90vw',
		[theme.breakpoints.up('md')]: {
			maxWidth: "75vw",
			margin: "2rem auto",
		},
	},
	headerContainer: {
		margin: "0 auto 2rem auto",
		overflow: "auto",
		textAlign: "left",
		backgroundColor: "rgba(35,50,51,0.9)",
		borderRadius: "1em",
		padding: "0 1em",
		height: "min-content",
		width: "90vw",
		[theme.breakpoints.up('md')]: {
			width: "75vw",
			padding: "2em",
		},
	},
	cardContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "stretch",
		height: "auto",
		margin: "0 auto",
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
		width: "100%",
		margin: "0 auto",
		overflow: "hidden",
		maxWidth: "800px",
		background: "#333",
		color: "tan",
		"& img": {
			objectFit: "contain",
			maxHeight: "70%" 
		},
	},
	cardContent: {
		padding: "3rem",
		background: "#333",
		color: "tan",
	},
	cardLinks: {
		marginTop: "1rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "1rem",
		flexFlow: "row wrap",
	},
	heading: {
		color: "tomato",
		padding: "1rem 0",
	},

}));

const portfolioItems = [
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
					Portfolio
				</Typography>
			</Box>

			<Grid sx={classes.cardGrid} container columns={12} spacing={8}>
				{portfolioItems.map((item) => (
					<Grid className={classes.cardContainer} item xs={12} lg={6} key={item.name}>
						<Paper elevation={18} className={classes.card}>
							<img src={item.image} alt={item.name} />
							<div className={classes.cardContent}>
								<Typography variant="h5" gutterBottom color="white">
									{item.name}
								</Typography>
								<Typography variant="body2" color="tan">
									{item.description}
								</Typography>
								<div className={classes.cardLinks}>
								{item.url &&
									<a style={{ verticalAlign: "bottom" }} href={item.url} target="_blank" rel="noreferrer">
										<LinkIcon sx={{ verticalAlign: "middle" }} />
										<Button size="small" color="primary">
											View website
										</Button>
									</a>}
								{item.github &&
									<a href={`https://www.github.com/dmcneary/${item.github}`}>
										<GitHubIcon sx={{ verticalAlign: "middle" }} />
										<Button size="small" color="primary">
											View on GitHub
										</Button>
									</a>}
								</div>
							</div>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Portfolio;
