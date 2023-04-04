import React from 'react';
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
	timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
	subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}))

const ResumeItem = ({ data }) => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.timeLineItem}>
			<Typography
				variant="h5"
				align="center"
				className={classes.subHeading}
			>
				{data.area}
			</Typography>
			<Typography
				variant="body1"
				align="center"
				className={classes.body1}
			>
				{data.company}
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				className={classes.subtitle1}
			>
				<ul>
					{data.desc.map(item => <li>{item}</li>)}
				</ul>
			</Typography>
		</Box>
	)
}

export default ResumeItem;