import useSWR, { mutate } from 'swr';
import { getBooks, IBook, deleteBook} from '../../services/bookService';
import Book from './Book';

const BookList = () => {

  const { data: books, error } = useSWR<IBook[]>('books', getBooks);
  
  const handleDelete = async (id: number) => {
    await deleteBook(id);
    mutate('books'); // This tells SWR to re-fetch and update the list of books
  };

  // Function to call when editing a book
  const handleEdit = (book: IBook) => {
    // Here you would show a form to edit the book
  };

  if (error) return <div>Failed to load books</div>;
  if (!books) return <div>Loading...</div>;
 
  return (
    <div>
     {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onDelete={handleDelete}
          onUpdate={handleEdit}
        />
      ))}
    </div>
  );
};

export default BookList;
