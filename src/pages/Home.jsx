import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PageTransition from "../components/PageTransition";
import ProfPic from "../images/profilepicture.webp";

const Home = () => {
	const theme = useTheme();

	return (
		<PageTransition>
			<Box component="main" sx={{
				height: "calc(100vh - 80px)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<Box sx={{
					...theme.mixins.contentBox,
					margin: 0,
					display: "flex",
					overflow: "hidden",
				}}>
					<Grid container columns={6} spacing={4} justifyContent="center" alignContent="space-around" alignItems={{ xs: "baseline", md: "center" }}>
						<Grid item xs={6} md={2} alignSelf="start" flexGrow="1">
							<Avatar
								sx={{
									margin: "0 auto",
									width: "100%",
									height: "100%",
									maxWidth: "45vw",
									"& .MuiAvatar-img": {
										transition: "all 0.8s ease-in-out",
									},
									"& .MuiAvatar-img:hover, & .MuiAvatar-img:focus": {
										transition: "all 0.8s ease-in-out",
										filter: "sepia(80%)"
									}
								}}
								src={ProfPic}
								slotProps={{ img: { loading: "eager" } }}
								alt="David McNeary"
							/>
						</Grid>
						<Grid item xs={6} md={4}>
							<Grid container columns={2} spacing={{ xs: 2, md: 4 }} justifyContent="center" alignContent="center">
								<Grid item xs={2} lg={1} sx={{ height: "100%" }}>
									<Typography sx={{
										color: theme.palette.text.secondary,
										fontSize: "clamp(14px, calc(3vw + 0.5em), 2em)"
									}} variant="h2">
										<span style={{
											animationName: "waveAnimation",
											animationDuration: "2.5s",
											animationIterationCount: "infinite",
											transformOrigin: "70% 70%",
											display: "inline-block"
										}}>👋</span>
										&nbsp;Hi, my name is David! <wbr />I'm a full stack developer working out of sunny Los Angeles, CA.
									</Typography>
								</Grid>
								<Grid item xs={2} lg={1}>

									<Typography sx={{ color: theme.palette.text.primary }} variant="body1">
										I enjoy working with a variety of technologies and have experience in a wide
										range of programming languages. I am always looking for new and exciting projects
										to work on! Please check out my <Link style={{ color: "inherit" }} to={"/portfolio"}>portfolio</Link> and <a style={{ color: "inherit" }} href="/David_McNeary_resume.pdf">resume</a>, and feel free to reach out
										to me if you have any questions or would like to collaborate.
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</PageTransition>
	);
};

export default Home;
