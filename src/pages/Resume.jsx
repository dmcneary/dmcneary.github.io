import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import ResumeItem from "../components/ResumeItem";
import jobsByYear from "../data/jobs";

const Resume = () => {
	const theme = useTheme();
	return (<React.Fragment>
				
					<Typography variant="h2" alignSelf="flex-start" gutterBottom>
						Resume
					</Typography>
				
				<Box sx={{
					...theme.mixins.contentBox,
					[theme.breakpoints.up("md")]: {
						padding: "0 2em",
						"&:before": {
							content: "''",
							position: "absolute",
							height: "100%",
							border: `1px solid ${theme.palette.text.primary}`,
							right: "50vw",
							left: "calc(50% - 1px)",
							boxSizing: "border-box",
						},
					}}}>
					{jobsByYear.map(el => (
						<React.Fragment key={el.year}>
							<Typography variant="h2" sx={{
								textAlign: "center",
								maxWidth: "9.375rem",
								margin: "2rem auto",
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
	</React.Fragment>
	);
};

export default Resume;
