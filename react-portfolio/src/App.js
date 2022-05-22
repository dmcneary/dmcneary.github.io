import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/resume" element={ <Resume />} />
            <Route exact path="/portfolio" element={ <Portfolio />} />
            <Route exact path="/contact" element={ <Contact />} />
          </Routes>
      
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
