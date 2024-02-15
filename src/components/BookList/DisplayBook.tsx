// BookDisplay.tsx
import React from 'react';
import { IBook } from '../../services/bookService';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface Props {
  book: IBook;
  onEdit: () => void; // Changed to a simple function since we don't need to pass the book for editing
  onDelete: () => void; // Changed for simplicity, assuming the parent component handles which book to delete
}

const DisplayBook: React.FC<Props> = ({ book, onEdit, onDelete }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography color="textSecondary">
          {book.author}
        </Typography>
        <Typography variant="body2" component="p">
          Genre: {book.genre}
        </Typography>
        <Typography variant="body2" component="p">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onEdit}>Edit</Button>
        <Button size="small" onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default DisplayBook;
