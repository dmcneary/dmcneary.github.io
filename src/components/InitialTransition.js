import React from "react";
import { motion } from "framer-motion";
import "./InitialTransition.css";

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};


const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="blackbox"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => {
        document.body.classList.add("overflow-hidden")
      }}
      onAnimationComplete={() => {
        document.body.classList.remove("overflow-hidden")
      }}
    >
      <motion.svg variants={textContainer} className="blackbox-text">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
        >
          <rect className="rect" />
          <motion.rect className="rect motion-rect"
            variants={text}
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
        >
          Welcome!
        </text>
      </motion.svg>
    </motion.div>
  );
};

export default InitialTransition