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
		height: "90vh",
		[theme.breakpoints.up('md')]: {
			margin: "0 auto",
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
			"& .MuiOutlinedInput-input": {
				color: "wheat",
			},
			"&.Mui-focused .MuiOutlinedInput-input": {
				color: "peru",
			},
			"& fieldset": {
				borderColor: "tan",
			},
			"&:hover fieldset": {
				borderColor: "wheat",
			},
			"&.Mui-focused fieldset": {
				borderColor: "peru",
			},
		},
	},
})(TextField);

const Contact = () => {
	const [sendSuccessful, setSendSuccessful] = useState(null);
	const [inputs, setInputs] = useState({
		user_name: {
			value: '',
			error: false,
			errorMsg: 'Please enter your name.'
		},
		user_email: {
			value: '',
			error: false,
			errorMsg: 'Please enter a valid email address.'
		},
		message: {
			value: '',
			error: false,
			errorMsg: 'Message cannot be blank.'
		}
	});
	const form = useRef();
	const classes = useStyles();
	const serviceId = process.env.REACT_APP_MAIL_SERVICE_ID;
	const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID;
	const pubKey = process.env.REACT_APP_MAIL_PUBLIC_KEY;

	const handleSuccessfulSendEmail = () => {
		setSendSuccessful(true);
		form.current.reset();
	};

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(serviceId, templateId, form.current, pubKey)
		.then(res => {
			(res.status === 200) ? handleSuccessfulSendEmail() : setSendSuccessful(false);
		});
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputs({
			...inputs,
			[name]: {
				...inputs[name],
				value: value,
				error: false
			}
		});
	};

	const handleInputBlur = (e) => {
		const { name, value } = e.target;
		let invalidValue = false;

		if (name === 'user_email') {
			const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			invalidValue = !emailPattern.test(value);
		} else {
			invalidValue = value === '';
		}

		setInputs({
			...inputs,
			[name]: {
				...inputs[name],
				error: invalidValue
			}
		});
		
	}

	return (
		<Box component="main" className={classes.mainContainer}>
			<Box className={classes.contactContainer} sx={{justifyContent: "center", alignItems: "center"}}>
				<Box component="form" ref={form} className={classes.form}>
					<Typography variant="h5" className={classes.heading}>
						Let's build together!
					</Typography>
					<InputField
						fullWidth
						margin="normal"
						label="Name"
						name="user_name"
						value={inputs.user_name.value}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						variant="outlined"
						required
						inputProps={{ className: classes.input }}
						error={inputs.user_name.error}
						helperText={inputs.user_name.error ? inputs.user_name.errorMsg : null}
					/>
					<InputField
						fullWidth
						margin="normal"
						label="Email"
						name="user_email"
						value={inputs.user_email.value}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						variant="outlined"
						required
						inputProps={{ className: classes.input }}
						error={inputs.user_email.error}
						helperText={inputs.user_email.error ? inputs.user_email.errorMsg : null}
					/>
					<InputField
						fullWidth
						margin="normal"
						label="Message"
						name="message"
						value={inputs.message.value}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						variant="outlined"
						required
						multiline
						rows={4}
						inputProps={{ className: classes.input }}
						error={inputs.message.error}
						helperText={inputs.message.error ? inputs.message.errorMsg : null}
					/>
					<Button
						variant="contained"
						sx={{
							marginTop: "1rem",
							color: "tan",
							fontWeight: "bold",
							backgroundColor: "teal",
							border: "2px solid tan",
							"&:hover": {
								backgroundColor: "tan",
								color: "teal",
								border: "2px solid teal"
							}
							}}
						endIcon={<Send />}
						onClick={sendEmail}
					>
						Contact Me
					</Button>
				</Box>
				{sendSuccessful === true && <Typography variant="h5" className={classes.heading}>Message sent!</Typography>}
				{sendSuccessful === false && <Typography variant="h5" className={classes.heading}>Sorry, there was a problem sending your message.</Typography>}
			</Box>
		</Box>
	)
};

export default Contact;
