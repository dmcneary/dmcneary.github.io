import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typed from "react-typed";
import ProfPic from "../images/profilepicture.png";
import Particles from "../components/Particles";
import { motion } from "framer-motion";

import InitialTransition from "../components/InitialTransition";


const Home = ({ isFirstMount }) => {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={content(isFirstMount)}
      >
        {isFirstMount && <InitialTransition />}
        <Particles />
        <motion.section variants={elements}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "100vw",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <Grid container sx={{ justifyContent: "center" }}>
              <Avatar
                sx={{
                  width: "25%",
                  height: 1,
                  m: 1,
                }}
                src={ProfPic}
                alt="David McNeary"
              />
            </Grid>
            <Typography sx={{ color: "tomato" }} variant="h4">
              David McNeary
            </Typography>

            <Typography
              sx={{
                color: "tan",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              <Typed
                strings={[
                  "React",
                  "Database",
                  "Node",
                  "Java",
                  "PHP",
                  "Perl",
                  "Javascript",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
              <span>&nbsp;Developer</span>
            </Typography>
          </Box>
        </motion.section>
      </motion.div>
    </motion.section>
  );
};

const content = (isFirstMount) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

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

export default Home;
