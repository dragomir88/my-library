import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledEditBox = styled(Box)(({ theme }) => ({
  '& .MuiTextField-root': {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  backgroundColor: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));

export default StyledEditBox;
