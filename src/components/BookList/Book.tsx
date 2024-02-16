// Book.tsx
import React, { useState } from 'react';
import { IBook, deleteBook, updateBook } from '../../services/bookService';
import DisplayBook from './DisplayBook';
import EditBook from './EditBook';
import { mutate } from 'swr';
import Card from '@mui/material/Card';

interface Props {
  book: IBook;
}

const Book: React.FC<Props> = ({ book }) => {
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
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* Use Card as the root component */}
      {isEditing ? (
        <EditBook book={book} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <DisplayBook book={book} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </Card>
  );
};

export default Book;
