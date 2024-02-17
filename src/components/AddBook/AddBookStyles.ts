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

export const BookFormContainer = styled('div')<{ formVisible: boolean }>(
  ({ formVisible }) => ({
    display: formVisible ? 'block' : 'none',
    width: '100%',
  }),
);