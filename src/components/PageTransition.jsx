import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const PageTransition = ({ children }) => {
	const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
			<Box component='main' sx={theme.mixins.mainContainer}>
      	{children}
			</Box>
    </motion.div>
  );
};

export default PageTransition; 