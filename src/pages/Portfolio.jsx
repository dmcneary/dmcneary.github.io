import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from '@mui/icons-material/Link';
import PageTransition from "../components/PageTransition";
import Button from "../components/Button";
import jakksImg from "../images/jakks.webp";
import archerImg from "../images/archer.webp";
import fitImg from "../images/fit-monkeys.webp";
import bamImg from "../images/bamazon.webp";
import bikeImg from "../images/12-cycling-greats.webp";
import tripImg from "../images/tripleclick.webp";

const portfolioItems = [
	{
		name: "JAKKS Pacific",
		description: "Multi-section corporate website for a leading toy company, featuring a product catalog and a blog.",
		url: "https://jakks.com",
		image: jakksImg,
	},
	{
		name: "Archer Sports Travel",
		description: "Travel info and booking for local youth sports teams.",
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
	const theme = useTheme();
	return (
		<PageTransition>
			<Box component="main" sx={theme.mixins.mainContainer}>
				<Box component="header" sx={{ ...theme.mixins.contentBox, marginBottom: "2rem" }}>
					<Typography variant="h2">
						Portfolio
					</Typography>
				</Box>

				<Grid container columns={12} spacing={8}>
					{portfolioItems.map((item) => (
						<Grid item xs={12} lg={6} key={item.name} sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "stretch",
							height: "auto",
							margin: "0 auto",
							[theme.breakpoints.up('md')]: {
								maxHeight: "100vh"
							},
						}}>
							<Paper elevation={18} sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
								alignItems: "stretch",
								height: "100%",
								width: "100%",
								margin: "0 auto",
								overflow: "hidden",
								maxWidth: "800px",
							}}>
								<Box sx={{
									width: "100%",
									height: "300px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									overflow: "hidden",
									backgroundColor: "#222",
								}}>
									<img
										src={item.image}
										alt={item.name}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "contain",
										}}
									/>
								</Box>

								<Box sx={{ padding: "1.5rem" }}>
									<Typography variant="h3" gutterBottom>
										{item.name}
									</Typography>
									<Typography variant="body2">
										{item.description}
									</Typography>
									<Box sx={{
										marginTop: "1rem",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										gap: "1rem",
										flexFlow: "row wrap",
									}}>
										{item.url &&
											<a style={{ textDecoration: "none" }} href={item.url} target="_blank" rel="noreferrer">
												<Button
													variant="text"
													size="small"
													startIcon={<LinkIcon />}
												>
													View website
												</Button>
											</a>}
										{item.github &&
											<a style={{ textDecoration: "none" }} href={`https://www.github.com/dmcneary/${item.github}`}>
												<Button
													variant="text"
													size="small"
													startIcon={<GitHubIcon />}
												>
													View on GitHub
												</Button>
											</a>}
									</Box>
								</Box>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Box>
		</PageTransition>
	);
};

export default Portfolio;
