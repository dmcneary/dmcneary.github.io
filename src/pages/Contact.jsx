import React, { useRef, useState } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import {
	Box,
	TextField,
	Typography,
	Button
} from "@mui/material";
import emailjs from '@emailjs/browser';
import Send from "@mui/icons-material/Send";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		height: "100vh",
		[theme.breakpoints.up('md')]: {
			margin: "0 5vw 0 calc(15em + 5vw)",
		},
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	contactContainer: {
		overflow: "auto",
		backgroundColor: "rgba(35,50,51,0.9)",
		borderRadius: "1em",
		padding: "1em",
		height: "min-content",
		width: "90vw",
		[theme.breakpoints.up('md')]: {
			width: "50vw",
			padding: "2em",
		},
	},
	heading: {
		color: "tomato",
		textAlign: "center",
		marginBottom: "1rem",
	},
	input: {
		color: "#fff",
		margin: "1rem 0"
	},
	button: {
		marginTop: "1rem",
		color: "tomato",
		borderColor: "tan",
	},
}));

const InputField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "tomato",
		},
		"& label": {
			color: "tan",
		},
		"& .MuiOutlinedInput-root": {
			margin: "0.75rem 0",
			"& fieldset": {
				borderColor: "tan",
			},
			"&:hover fieldset": {
				borderColor: "tan",
			},
			"&.Mui-focused fieldset": {
				color: "#fff",
				borderColor: "tan",
			},
		},
	},
})(TextField);

const Contact = () => {
	const [sendSuccessful, setSendSuccessful] = useState(false);
	const classes = useStyles();
	const form = useRef();
	const serviceId = process.env.REACT_APP_MAIL_SERVICE_ID;
	const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID;
	const pubKey = process.env.REACT_APP_MAIL_PUBLIC_KEY;

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(serviceId, templateId, form.current, pubKey)
		.then(res => {
			(res.status === 200) ? setSendSuccessful(true) : setSendSuccessful(false);
		});
	};

	return (

		<Box component="main" className={classes.mainContainer}>
			<Box className={classes.contactContainer} sx={{justifyContent: "center", alignItems: "center"}}>
				<Box component="form" className={classes.form} ref={form}>
					<Typography variant="h5" className={classes.heading}>
						Let's build together!
					</Typography>
					<InputField
						fullWidth={true}
						label="Name"
						name="user_name"
						variant="outlined"
						inputProps={{ className: classes.input }}
					/>
					<InputField
						fullWidth={true}
						label="Email"
						name="user_email"
						variant="outlined"
						inputProps={{ className: classes.input }}
					/>
					<InputField
						fullWidth={true}
						label="Message"
						name="message"
						variant="outlined"
						multiline
						rows={4}
						inputProps={{ className: classes.input }}
					/>
					<Button
						variant="contained"
						endIcon={<Send />}
						className={classes.button}
						onClick={sendEmail}
					>
						Contact Me
					</Button>
				</Box>
				{sendSuccessful ? <Typography variant="h5" className={classes.heading}>Message sent!</Typography> : null}
			</Box>
		</Box>
	)
};

export default Contact;
