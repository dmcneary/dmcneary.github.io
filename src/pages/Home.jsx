import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from "react-typed";
import ProfPic from "../images/profilepicture.webp";

const useStyles = makeStyles((theme) => ({
	main: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "stretch",
		[theme.breakpoints.up('md')]: {
			margin: "0 5vw 0 calc(15em + 5vw)",
			alignItems: "center",
		}
	},
	wave: {
		animationName: "$waveAnimation",
		animationDuration: "2.5s",
		animationIterationCount: "infinite",
		transformOrigin: "70% 70%",
		display: "inline-block",
	},
	typed: {
		color: "tan",
		fontWeight: "bold",
	},
	bioBox: {
		overflow: "auto",
		textAlign: "left",
		backgroundColor: "rgba(35,50,51,0.9)",
		borderRadius: "1em",
		padding: "1em",
		margin: "10vh 0 5vh 0",
		height: "auto",
		width: "90vw",
		display: "flex",
		[theme.breakpoints.up('md')]: {
			width: "75vw",
			padding: "2em",
			height: "min-content",
		},
	},
	"@keyframes waveAnimation": {
		"0%": { transform: "rotate( 0.0deg)" },
		"10%": { transform: "rotate(14.0deg)" },
		"20%": { transform: "rotate(-8.0deg)" },
		"30%": { transform: "rotate(14.0deg)" },
		"40%": { transform: "rotate(-4.0deg)" },
		"50%": { transform: "rotate(10.0deg)" },
		"60%": { transform: "rotate( 0.0deg)" },
		"100%": { transform: "rotate( 0.0deg)" },
	}
}));

const skills = [
	"Full-stack",
	"Wordpress",
	"React",
	"Database",
	"Node",
	"Java",
	"PHP",
	"Perl",
	"Javascript",
];

const Home = () => {
	const classes = useStyles();
	return <Box component="main" className={classes.main}>
		<Box className={classes.bioBox}>
			<Grid container columns={6} spacing={4} justifyContent="center" alignContent="space-around" alignItems={{xs: "baseline", md:"center"}}>
				<Grid item xs={6} md={2} alignSelf="start" flexGrow="1">
					<Avatar
						sx={{
							margin: "0 auto",
							width: "100%",
							height: "100%",
							maxWidth: "45vw",
						}}
						src={ProfPic}
						alt="David McNeary"
					/>
				</Grid>
				<Grid item xs={6} md={4}>
					<Grid container columns={2} spacing={{xs: 2, md: 4}} justifyContent="center" alignContent="center">
						<Grid item xs={2} lg={1}>
							<Typography sx={{ color: "tomato", fontSize: "clamp(14px, calc(3vw + 0.5em), 2em)"}} variant="h2">
								<span className={classes.wave}>👋</span>&nbsp;Hi! My name is David and I am a <wbr />
								<span className={classes.typed}>
									<Typed strings={skills} typeSpeed={40} backSpeed={50} loop /><wbr />
									developer&nbsp;
								</span><wbr />
								currently working out of sunny Los Angeles, CA.
							</Typography>
						</Grid>
						<Grid item xs={2} lg={1}>
							<Typography sx={{ color: "tan", fontSize: "1em"}} variant="body1">
								I enjoy working with a variety of technologies and have experience in a wide
								range of programming languages. I am always looking for new and exciting projects
								to work on! Please check out my <Link className="" to={"/portfolio"}>portfolio</Link> and <a className="" href="/David_McNeary_resume.pdf">resume</a>, and feel free to reach out
								to me if you have any questions or would like to collaborate.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	</Box>
};

export default Home;
