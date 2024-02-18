import React, { useState } from 'react';
import { Card } from '@mui/material';
import { IBook } from '../../types/types';  
import DisplayBook from './DisplayBook';
import GenericBookForm from './GenericBookForm';
interface BookProps {
  book: IBook;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleFormSubmit = () => setIsEditing(false);

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {isEditing ? (
        <GenericBookForm book={book} onCancel={handleFormSubmit} />
      ) : (
        <DisplayBook book={book} onEdit={handleEdit} />
      )}
    </Card>
  );
};

export default Book;
