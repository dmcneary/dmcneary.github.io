import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';

const ResumeItem = ({ data }) => {
	const theme = useTheme();
	
	return (
		<Box 
			component="div" 
			sx={{
				padding: "1rem",
				backgroundColor: "#333",
				borderRadius: "15px",
				border: theme.palette.secondary.main,
				position: "relative",
				opacity: "0.9",
				margin: "1rem 0",
				clear: "both",
				"& ul": {
					paddingInlineStart: "0px"
				},
				"&:after": {
					content: "''",
					position: "absolute",
				},
				[theme.breakpoints.up("md")]: {
					width: "44%",
					margin: "2rem 0",
					textAlign: "start",
					"&:before": {
						content: "''",
						position: "absolute",
						right: "-0.625rem",
						top: "calc(50% - 5px)",
						borderStyle: "solid",
						borderColor: `${theme.palette.secondary.main} ${theme.palette.secondary.main} transparent transparent`,
						borderWidth: "0.625rem",
						transform: "rotate(45deg) scale(2)",
					},
					"&:nth-of-type(2n)": {
						float: "right",
						textAlign: "start",
						margin: "2rem 0",
					},
					"&:nth-of-type(2n):before": {
						right: "auto",
						left: "-0.625rem",
						borderColor: `transparent transparent ${theme.palette.secondary.main} ${theme.palette.secondary.main}`,
					},
				},
			}}
		>
			<Typography
				variant="h5"
				sx={{
					color: theme.palette.text.accent,
					padding: 0,
					textTransform: "uppercase",
				}}
			>
				{data.area}
			</Typography>
			<Typography
				variant="body1"
				sx={{ color: theme.palette.text.secondary }}
			>
				{data.company}
			</Typography>
			<Box
				component="ul"
				sx={{
					listStyle: "none",
					lineHeight: "1.15",
					"& li": {
						marginBottom: "1rem",
						fontSize: "1rem",
						[theme.breakpoints.down("sm")]: {
							fontSize: "0.8rem",
						},
					},
				}}
			>
				{data.desc.map((item, i) => (
					<li key={item}>
						<Typography
							variant="body1"
							sx={{ color: theme.palette.text.primary }}
						>
							{item}
						</Typography>
					</li>
				))}
			</Box>
		</Box>
	);
};

export default ResumeItem;