import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const theme = createTheme();

function App() {
  const location = useLocation();
  const [isFirstMount, setIsFirstMount] = useState(true);
  const didMount = useRef(false);
  useEffect(() => {
    return () => {
      didMount.current && setIsFirstMount(false);
      didMount.current = true;
    }
    },[didMount.current]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home isFirstMount={isFirstMount}/>} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
