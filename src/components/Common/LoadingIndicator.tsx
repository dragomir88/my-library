import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingIndicator: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingIndicator;
