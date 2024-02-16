import React from 'react';
import { IBook } from '../../services/bookService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Props {
  book: IBook;
  onEdit: () => void;
  onDelete: () => void;
}

const DisplayBook: React.FC<Props> = ({ book, onEdit, onDelete }) => {
  return (
    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography color="textSecondary">
            Author: {book.author}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Genre: {book.genre}
          </Typography>
          <Typography variant="body2">
            {book.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'flex-end', p: 1.5 }}>
          <Button size="small" variant="outlined" onClick={onEdit}>Edit</Button>
          <Button size="small" variant="outlined" color="error" onClick={onDelete}>Delete</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default DisplayBook;
