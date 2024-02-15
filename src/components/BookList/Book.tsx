// Book.tsx
import React, { useState } from "react";
import { IBook } from "../../services/bookService";
import DisplayBook from "./DisplayBook";
import EditBook from "./EditBook";

interface Props {
  book: IBook;
  onDelete: (id: number) => void;
  onUpdate: (book: IBook) => void; // Assuming you have a method to update the book in the parent component
}

const Book: React.FC<Props> = ({ book, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = (updatedBook: IBook) => {
    onUpdate(updatedBook);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditBook book={book} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <DisplayBook
        book={book} onEdit={handleEdit} onDelete={() => onDelete(book.id)}
        />
      )}
    </>
  );
};

export default Book;
