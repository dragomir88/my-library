import { styled } from '@mui/material/styles';

interface AddBookButtonContainerProps {
  formVisible: boolean;
}

export const AddBookButtonContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'formVisible',
  })<AddBookButtonContainerProps>(({ formVisible }) => ({
    display: formVisible ? 'none' : 'flex',
    justifyContent: 'center',
  }));