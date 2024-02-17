import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)({
  fontFamily: "'Brush Script MT', cursive",  
  textAlign: 'center',
  fontSize: '6rem', 
  color: '#fff', 
  
});
 
const ElegantTypography = (props: TypographyProps) => (
  <StyledTypography {...props} />
);

export default ElegantTypography;
