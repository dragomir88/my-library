// AddBookButton.tsx
import React from 'react';
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

interface AddBookButtonProps {
  onClick: () => void; // Function to toggle form visibility
}

const AddBookButton: React.FC<AddBookButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      size="large"
      sx={{
        fontSize: 60,
        color: 'white',
        backgroundColor: '#1976d2',
        '&:hover': {
          backgroundColor: '#115293',
        },
        borderRadius: '50%',
        padding: '16px',
      }}
    >
      <AddIcon fontSize="inherit" />
    </IconButton>
  );
};

export default AddBookButton;
