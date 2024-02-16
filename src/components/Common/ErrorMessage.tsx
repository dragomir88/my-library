import React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Alert severity="error">{message}</Alert>
    </Box>
  );
};

export default ErrorMessage;
