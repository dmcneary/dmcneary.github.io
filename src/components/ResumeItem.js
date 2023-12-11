import React from 'react';
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
	timeLineItem: {
    padding: "1rem",
		backgroundColor: "#333",
		borderRadius: "15px",
    /*borderBottom: "2px solid tan",*/
    position: "relative",
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
			textAlign:"end",
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
      "&:nth-of-type(2n)": {
        float: "right",
				textAlign:"start",
        margin: "2rem 0",
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
	descItem: {
		listStyle: "none",
		lineHeight: "1.15",
		"& li": {
			marginBottom: "1rem",
			fontSize: "1rem",
			[theme.breakpoints.down("sm")]: {
				fontSize: "0.8rem",
			},
		},
	},
}))

const ResumeItem = ({ data }) => {
	const classes = useStyles();
	return (
		<Box component="div" className={classes.timeLineItem}>
			<Typography
				variant="h5"
				className={classes.subHeading}
			>
				{data.area}
			</Typography>
			<Typography
				variant="body1"
				className={classes.body1}
			>
				{data.company}
			</Typography>
			<Typography
				variant="body1"
				className={classes.subtitle1}
			>
				<ul className={`${classes.descItem}`}>
					{data.desc.map(item => <li>{item}</li>)}
				</ul>
			</Typography>
		</Box>
	)
}

export default ResumeItem;