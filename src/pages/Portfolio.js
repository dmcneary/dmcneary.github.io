import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import project1 from "../images/fit-monkeys.jpg";
import project2 from "../images/books.png";
import project3 from "../images/bamazon.JPG";
import project4 from "../images/greats.png";
import project5 from "../images/tripleclick.png";
import project6 from "../images/scraper.JPG";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 400,
    height: "auto",
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Fit Monkeys",
    description: "A fitness tracking app using Leaflet with the MERN stack",
    github: "fit-monkeys",
    image: project1,
  },
  {
    name: "Google Books Search",
    description: "A MERN app to search for books using the Google Books API",
    github: "google-books-list",
    image: project2,
  },
  {
    name: "Bamazon",
    description:
      "A CLI to simulate purchasing bike parts, using Node and MySQL",
    github: "bamazon-cli",
    image: project3,
  },
  {
    name: "12 Cycling Greats",
    description: "A memory game using React",
    github: "12-cycling-greats",
    image: project4,
  },
  {
    name: "TripleClick",
    description: "A full-stack e-commerce app using the PERN stack with MUI.",
    github: "tripleclick",
    image: project5,
  },
  {
    name: "AP News Scraper",
    description:
      "An article aggregation app scraping from the AP newswire, using Handlebars.js, Cheerio.js, and MongoDB.",
    github: "news-scraper",
    image: project6,
  },
];

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

const Portfolio = () => {
  const classes = useStyles();
  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div initial="initial" animate="animate" variants={content}>
        <motion.section variants={elements}>
          <Box component="div" className={classes.mainContainer}>
            <Grid container sx={{justifyContent: "center", alignItems: "center"}}>
              {/* Projects */}
              {projects.map((project, i) => (
                <Grid item xs={12} sm={8} md={4} key={i}>
                  <Card className={classes.cardContainer}>
                    
                      <CardMedia
                        component="img"
                        alt={"Project " + i}
                        image={project.image}
                      />
                      <CardContent>
                        <Typography variant="h5" gutterBottom>
                          {project.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {project.description}
                        </Typography>
                      </CardContent>
                    
                    <CardActions>
                      <a
                        href={
                          "https://www.github.com/dmcneary/" + project.github
                        }
                      >
                        <GitHubIcon />
                        <Button size="small" color="primary">
                          View on GitHub
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
