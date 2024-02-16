// BookForm.tsx
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useSWRConfig } from "swr";
import { TextField, Button, Box, Typography } from "@mui/material";
import { API_URL } from "../../services/bookService";
import StyledFormBox from "./BookFormStyles";

interface BookFormValues {
  title: string;
  author: string;
  genre: string;
  description: string;
}

const BookForm: React.FC = () => {
  const { mutate } = useSWRConfig();
  const formik = useFormik<BookFormValues>({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      description: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post(API_URL, values);
        mutate("books");
        resetForm();
      } catch (error) {
        console.error("There was an error adding the book:", error);
      }
    },
  });

  return (
    <StyledFormBox component="form" onSubmit={formik.handleSubmit} noValidate>
      <Typography variant="h6">Add a New Book</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Book Title"
        name="title"
        autoComplete="title"
        autoFocus
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="author"
        label="Author"
        name="author"
        autoComplete="author"
        value={formik.values.author}
        onChange={formik.handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="genre"
        label="Genre"
        name="genre"
        autoComplete="genre"
        value={formik.values.genre}
        onChange={formik.handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="description"
        label="Description"
        name="description"
        autoComplete="description"
        multiline
        rows={4}
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add Book
      </Button>
    </StyledFormBox>
  );
};

export default BookForm;
