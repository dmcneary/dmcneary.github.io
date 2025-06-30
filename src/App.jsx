import { Route, Routes, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import './styles/index.css';

const theme = createTheme({
	palette: {
		primary: {
			main: '#2C3930', // darkest green
		},
		secondary: {
			main: '#3F4F44', // green
		},
		text: {
			primary: '#DCD7C9', // slate
			secondary: '#A27B5C', // brown
			accent: '#cd853f', // peru
		},
		background: {
			default: '#121212',
			paper: '#333333',
		},
	},
	typography: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		h1: {
			color: '#A27B5C', // brown - main headings (navbar)
			fontSize: 'calc(1em + 1vw)',
		},
		h2: {
			color: '#A27B5C', // brown - page titles
			padding: '1rem 0',
			fontSize: '2rem',
		},
		h3: {
			color: '#f5deb3', // brown - major section headings
			fontSize: '1.75rem',
		},
		h4: {
			color: '#DCD7C9', // slate - subsection headings
			fontSize: '1.5rem',
		},
		h5: {
			color: '#DCD7C9', // slate - minor headings
			fontSize: '1.25rem',
		},
		h6: {
			color: '#DCD7C9', // slate - smallest headings
			fontSize: '1rem',
		},
		body1: {
			color: '#DCD7C9', // slate
		},
		body2: {
			color: '#DCD7C9', // slate
		},
		a: {
			color: '#A27B5C', // brown
			textDecoration: 'none',
			'&:hover': {
				color: '#cd853f', // peru
				textDecoration: 'underline',
			},
		},
	},
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& label.Mui-focused': {
						color: '#A27B5C', // brown
					},
					'& label': {
						color: '#DCD7C9', // slate
					},
					'& .MuiOutlinedInput-root': {
						'& .MuiOutlinedInput-input': {
							color: '#f5deb3', // brown
						},
						'&.Mui-focused .MuiOutlinedInput-input': {
							color: '#cd853f', // peru
						},
						'& fieldset': {
							borderColor: '#DCD7C9', // slate
						},
						'&:hover fieldset': {
							borderColor: '#f5deb3', // brown
						},
						'&.Mui-focused fieldset': {
							borderColor: '#cd853f', // peru
						},
					},
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					color: '#DCD7C9', // slate
					fontWeight: 'bold',
					backgroundColor: "#3F4F44",
					border: '2px solid #DCD7C9',
					'&:hover': {
						backgroundColor: '#DCD7C9',
						color: "#3F4F44",
						border: '2px solid #DCD7C9',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#333333',
					color: '#DCD7C9', // slate
				},
			},
		},
	},
	mixins: {
		mainContainer: {
			background: "none",
			margin: '0 auto',
			/*height: 'calc(100vh - 96px)',*/
			display: 'flex',
			flexFlow: 'column nowrap',
			justifyContent: 'center',
			alignItems: 'center',
			width: '90vw',
			maxWidth: '1200px',
			'@media (max-width: 900px)': {
				width: '80vw',
				maxWidth: '640px'
			},
		},
		contentBox: {
			backgroundColor: "#333333",
			borderRadius: '1em',
			height: "100%",
			width: '90vw',
			'@media (min-width: 900px)': {
				width: '75vw',
			},
		},
	},
});

const App = () => {
	const location = useLocation();

	return <ThemeProvider theme={theme}>
		<CssBaseline />
		<Navbar />
		<AnimatePresence mode="wait">
			<Routes location={location}>
				<Route path="/" element={<PageTransition key={location.pathname}><Home /></PageTransition>} />
				<Route path="/resume" element={<PageTransition key={location.pathname}><Resume /></PageTransition>} />
				<Route path="/portfolio" element={<PageTransition key={location.pathname}><Portfolio /></PageTransition>} />
				<Route path="/contact" element={<PageTransition key={location.pathname}><Contact /></PageTransition>} />
			</Routes>
		</AnimatePresence>
	</ThemeProvider>
};

export default App;
