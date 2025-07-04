import React, { useRef, useState } from "react";
import {
	Box,
	TextField,
	Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PageTransition from "../components/PageTransition";
import emailjs from '@emailjs/browser';
import Send from "@mui/icons-material/Send";
import Button from "../components/Button";

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
	const theme = useTheme();
	const serviceId = import.meta.env.VITE_MAIL_SERVICE_ID;
	const templateId = import.meta.env.VITE_MAIL_TEMPLATE_ID;
	const pubKey = import.meta.env.VITE_MAIL_PUBLIC_KEY;

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
		<PageTransition>
			<Box component="main" sx={{
				height: "90vh",
				[theme.breakpoints.up('md')]: {
					margin: "0 auto",
				},
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}>
				<Box sx={theme.mixins.contentBox}>
					<Box component="form" ref={form}>
						<Typography variant="h2" sx={{ textAlign: "center", marginBottom: "1rem" }}>
							Let's build together!
						</Typography>
						<TextField
							fullWidth
							margin="normal"
							label="Name"
							name="user_name"
							value={inputs.user_name.value}
							onChange={handleInputChange}
							onBlur={handleInputBlur}
							variant="outlined"
							required
							error={inputs.user_name.error}
							helperText={inputs.user_name.error ? inputs.user_name.errorMsg : null}
						/>
						<TextField
							fullWidth
							margin="normal"
							label="Email"
							name="user_email"
							value={inputs.user_email.value}
							onChange={handleInputChange}
							onBlur={handleInputBlur}
							variant="outlined"
							required
							error={inputs.user_email.error}
							helperText={inputs.user_email.error ? inputs.user_email.errorMsg : null}
						/>
						<TextField
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
							error={inputs.message.error}
							helperText={inputs.message.error ? inputs.message.errorMsg : null}
						/>
						<Button
							endIcon={<Send />}
							onClick={sendEmail}
							sx={{ marginTop: "1rem" }}
						>
							Contact Me
						</Button>
					</Box>
					{sendSuccessful === true && <Typography variant="h4" sx={{ textAlign: "center", marginTop: "1rem" }}>Message sent!</Typography>}
					{sendSuccessful === false && <Typography variant="h4" sx={{ textAlign: "center", marginTop: "1rem" }}>Sorry, there was a problem sending your message.</Typography>}
				</Box>
			</Box>
		</PageTransition>
	)
};

export default Contact;
