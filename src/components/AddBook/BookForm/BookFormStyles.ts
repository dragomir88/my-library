
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const StyledFormBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  padding: theme.spacing(2),
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
})) as typeof Box;

export const CenteredButton = styled(Button)({
  display: 'block', 
  width: 'auto', 
  margin: 'auto', 
  marginTop: '24px',
  marginBottom: '20px',
  padding: '12px 30px', 
  fontSize: '1.5rem'
});