// BookForm.tsx
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useSWRConfig } from "swr";
import { TextField, Button, Box, Typography } from "@mui/material";
import { API_URL } from "../../services/bookService";

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
        mutate(API_URL); // Revalidate the books list
        resetForm();
      } catch (error) {
        console.error("There was an error adding the book:", error);
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{
        mt: 1,
        p: 2, // Adds padding inside the Box
        backgroundColor: "white", // Sets the background color to white
        borderRadius: "8px", // Optional: adds rounded corners
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: adds a subtle shadow
      }}
    >
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
    </Box>
  );
};

export default BookForm;
