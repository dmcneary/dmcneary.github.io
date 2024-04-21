import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from "react-typed";
import ProfPic from "../images/profilepicture.webp";

const useStyles = makeStyles((theme) => ({
	wave: {
		animationName: "$waveAnimation",
		animationDuration: "2.5s",
		animationIterationCount: "infinite",
		transformOrigin: "70% 70%",
		display: "inline-block",
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

const Home = () => {
	const classes = useStyles();
	return (
		<Box component="main">
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
					width: "50vw",
					textAlign: "left",
					zIndex: 1,
					backgroundColor: "rgba(35,50,51,0.8)",
					padding: "2rem",
					borderRadius: "1rem",
				}}
			>
				<Grid container sx={{ justifyContent: "center" }}>
					<Avatar
						sx={{
							width: "25%",
							height: 1,
							m: 1,
						}}
						src={ProfPic}
						alt="David McNeary"
					/>
				</Grid>
				<Typography sx={{ color: "tomato" }} variant="h4">
					<span className={classes.wave}>👋</span>&nbsp;Hi! My name is David <br />and I am a&nbsp;
					<Typed
						strings={[
							"Full-stack",
							"Wordpress",
							"React",
							"Database",
							"Node",
							"Java",
							"PHP",
							"Perl",
							"Javascript",
						]}
						typeSpeed={40}
						backSpeed={50}
						loop
					/>
					<span>&nbsp;developer</span>
				</Typography>

				<Typography
					sx={{
						color: "tomato",
						textTransform: "uppercase",
					}}
					variant="h5"
				>
					
				</Typography>
				<Typography sx={{ color: "tomato" }} variant="h4">
					currently working out of sunny Los Angeles, CA.
				</Typography>
			</Box>
		</Box>
	);
};

export default Home;
