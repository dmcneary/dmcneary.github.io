import React, { useRef } from "react";
import { makeStyles, withStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import Send from "@mui/icons-material/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
}));

const InputField = withStyles({
  root: {
    margin: "0.5rem 0",
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
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

const elements = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const content = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const Contact = () => {
  const classes = useStyles();
  const form = useRef();
  const serviceId = process.env.REACT_APP_MAIL_SERVICE_ID;
  const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID;
  const pubKey = process.env.REACT_APP_MAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, pubKey);
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div initial="initial" animate="animate" variants={content}>
        <motion.section variants={elements}>
          <Box component="div" className={classes.contactContainer}>
            <Grid container justify="center">
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
                  variant="outlined"
                  fullWidth={true}
                  endIcon={<Send />}
                  className={classes.button}
                  onClick={sendEmail}
                >
                  Contact Me
                </Button>
              </Box>
            </Grid>
          </Box>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
