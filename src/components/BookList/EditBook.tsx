import React from "react";
import { TextField, Button, CardActions } from "@mui/material";
import StyledEditBox from "./EditBookStyles";
import { IBook } from "../../types/types";
import { bookFormSchema } from "../AddBook/BookForm/FormValidation";
import { useSWRConfig } from "swr";
import { useBookFormik } from "../../hooks/formHook";

interface IEditBook {
  book: IBook;
  onSave: (book: IBook) => void;
  onCancel: () => void;
}

const EditBook: React.FC<IEditBook> = ({ book, onSave, onCancel }) => {
  const { mutate } = useSWRConfig();
  const formik = useBookFormik({
    bookFormSchema,
    currentBook: book,
    onFormSubmit: (updatedBook) => onSave(updatedBook || book),
    mutate
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledEditBox>
        <TextField
          label="Title"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          label="Author"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
        />
        <TextField
          label="Genre"
          name="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          error={formik.touched.genre && Boolean(formik.errors.genre)}
          helperText={formik.touched.genre && formik.errors.genre}
        />
        <TextField
          label="Description"
          name="description"
          multiline
          rows={4}
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}  
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <CardActions sx={{ justifyContent: "flex-end", p: 1.5 }}>
          <Button type="submit" size="small" variant="outlined">
            Save
          </Button>
          <Button size="small" variant="outlined" color="error" onClick={onCancel}>
            Cancel
          </Button>
        </CardActions>
      </StyledEditBox>
    </form>
  );
};

export default EditBook;
