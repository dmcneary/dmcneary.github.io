import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Button = ({ children, variant = 'contained', size = 'large', startIcon, endIcon, ...props }) => {
  const theme = useTheme();

  return (
    <MuiButton
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        color: theme.palette.text.primary,
        backgroundColor: variant === 'contained' ? theme.palette.secondary.main : 'transparent',
        border: `2px solid ${theme.palette.text.primary}`,
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.primary.main,
          border: `2px solid ${theme.palette.primary.main}`,
        },
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
