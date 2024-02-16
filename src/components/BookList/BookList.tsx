import React from "react";
import useSWR from "swr";
import { getBooks, IBook } from "../../services/bookService";
import Book from "./Book";
import Grid from "@mui/material/Grid";

const BookList = () => {
  const { data: books, error } = useSWR<IBook[]>("books", getBooks);

  if (error) return <div>Failed to load books</div>;
  if (!books) return <div>Loading...</div>;

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
