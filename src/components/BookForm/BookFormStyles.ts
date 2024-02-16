// BookFormStyles.ts
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledFormBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
})) as typeof Box;

export default StyledFormBox;
