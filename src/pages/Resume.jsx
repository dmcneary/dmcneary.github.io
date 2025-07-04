import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PageTransition from "../components/PageTransition";
import ResumeItem from "../components/ResumeItem";
import jobsByYear from "../data/jobs";

const Resume = () => {
	const theme = useTheme();
	return (
		<PageTransition>
			<Box component="main" sx={theme.mixins.mainContainer}>
				<Box component="header" sx={theme.mixins.contentBox}>
					<Typography variant="h2" gutterBottom>
						My Resume
					</Typography>
					<Typography variant="body2" sx={{ md: { maxWidth: "50%" } }}>
						* Please note, I have omitted some prior experience from this resume. Feel free to contact me if you want to talk about the bicycle industry!
					</Typography>
				</Box>
				<Box component="main" sx={{
					position: "relative",
					padding: "1rem",
					margin: "0 auto",
					[theme.breakpoints.up("md")]: {
						padding: "2rem",
						"&:before": {
							content: "''",
							position: "absolute",
							height: "100%",
							border: `1px solid ${theme.palette.primary.main}`,
							right: "50vw",
							top: 0,
							left: "calc(50% - 1px)",
						},
					},
				}}>
					{jobsByYear.map(el => (
						<React.Fragment key={el.year}>
							<Typography variant="h2" sx={{
								textAlign: "center",
								maxWidth: "9.375rem",
								margin: "0 auto",
								color: theme.palette.text.primary,
								background: theme.palette.secondary.main,
								lineHeight: 1,
								borderRadius: "1rem",
								padding: "1rem 0.5rem",
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
							}}>
								{el.year}
							</Typography>
							{el.roles.map(role => <ResumeItem key={`${role.company}-${role.area}`} data={role} />)}
						</React.Fragment>
					))}
				</Box>
			</Box>
		</PageTransition>
	);
};

export default Resume;
