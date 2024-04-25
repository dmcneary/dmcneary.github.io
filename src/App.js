import { Route, Routes, HashRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const theme = createTheme();

const App = () => {

	return <HashRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Navbar />
			<div>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/resume" element={<Resume />} />
					<Route exact path="/portfolio" element={<Portfolio />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</ThemeProvider>
	</HashRouter>
};

export default App;
