import useSWR from "swr";
import { getBooks } from "../../services/bookService";
import Book from "./Book";
import Grid from "@mui/material/Grid";
import ErrorMessage from "../Common/ErrorMessage";
import LoadingIndicator from "../Common/LoadingIndicator";
import { IBook } from "../../types/types";

const BookList = () => {
  const { data: books, error } = useSWR<IBook[]>("books", getBooks);

  if (error) return <ErrorMessage message="Failed to load books." />; 
  if (!books) return <LoadingIndicator />;

  return (
    <Grid container spacing={2} alignItems="stretch">
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4} lg={4}>
          <Book book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
