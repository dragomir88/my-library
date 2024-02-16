// EditBook.tsx
import React from "react";
import { useFormik } from "formik";
import { IBook } from "../../services/bookService";
import { TextField, Button, Box } from "@mui/material";

interface Props {
  book: IBook;
  onSave: (book: IBook) => void; 
  onCancel: () => void; 
}

const EditBook: React.FC<Props> = ({ book, onSave, onCancel }) => {
  const formik = useFormik({
    initialValues: book,
    onSubmit: (values) => {
      onSave(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        sx={{
          "& .MuiTextField-root": { marginBottom: 2, width: "100%" },
          backgroundColor: "white", // Sets the background color to white
          padding: 2, // Adds some padding inside the Box (optional for better spacing)
          borderRadius: "8px", // Optional: adds rounded corners for a better look
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: adds a subtle shadow for depth (adjust as needed)
        }}
      >
        <TextField
          label="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <TextField
          label="Author"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        <TextField
          label="Genre"
          name="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="contained">
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default EditBook;
