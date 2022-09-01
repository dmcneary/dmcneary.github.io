import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
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
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
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
}));

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

const Resume = () => {
  const classes = useStyles();
  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div initial="initial" animate="animate" variants={content}>
        <motion.section variants={elements}>
          <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
              Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                2022
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  Web Development
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Archer Travel Service
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  <ul>
                    <li>Maintained travel agent portal using Ruby on Rails (10k+ users)</li>
                    <li>Migrated company webpage from Wordpress to React</li>
                    <li>Cleaned and mitigated malware attacks; hardened security on Wordpress websites</li>
                    <li>Automated custom video rendering and distribution using Node.js and Adobe products</li>
                  </ul>
                </Typography>
              </Box>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  IT Support
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Tseng College at Cal State Northridge
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  <ul>
                    <li>
                      Assisted staff with new software installations and updates
                    </li>
                    <li>Deployed and configure new hardware assets</li>
                    <li>
                      Migrated workspaces from remote to on-campus environments
                    </li>
                  </ul>
                </Typography>
              </Box>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                2021
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  Web Development
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Santa Monica College
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  <ul>
                    <li>Updated and organized assets via CMS</li>
                    <li>Automated asset migration processes using Node.js</li>
                    <li>Implemented custom features to vendor widgets using JavaScript</li>
                  </ul>
                </Typography>
              </Box>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                2020
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  Teaching Assistant
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Trilogy Education Services
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  <ul>
                  <li>Oversaw a cohort of 30+ students in a remote learning environment</li>
                  <li>Taught best practices in MERN stack web development</li>
                  <li>Used Slack, Canvas, and Zoom  for student/staff coordination and web instruction</li>

                  </ul>
                </Typography>
              </Box>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  IT Support
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Los Angeles County Registrar/Recorder
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  <ul>
                  <li>Provided first-level onsite maintenance and support for 2020 Presidential election</li>
                  <li>Ensured proper chain of custody for election devices</li>
                  <li>Coordinated with central help desk to mitigate errors and outages</li>

                  </ul>
                </Typography>
              </Box>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  Web Development
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Think Electric
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Implemented updates with breaking changes to a 10-year old customized fork of open-source ERP software using Apache, Perl, PHP, and PostgreSQL.
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
