// Book.tsx
import React, { useState } from 'react';
import { deleteBook, updateBook } from '../../services/bookService';
import DisplayBook from './DisplayBook';
import EditBook from './EditBook';
import { mutate } from 'swr';
import Card from '@mui/material/Card';
import { IBook } from '../../types/types';

const Book: React.FC<{ book: IBook }> = ({ book }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => setIsEditing(false);

  const handleSave = async (updatedBook: IBook) => {
    await updateBook(updatedBook.id, updatedBook);
    mutate('books');  
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await deleteBook(book.id);
    mutate('books');  
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {isEditing ? (
        <EditBook book={book} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <DisplayBook book={book} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </Card>
  );
};

export default Book;
