import React from "react";
import { useSWRConfig } from "swr";
import { TextField, Typography } from "@mui/material";
import { CenteredButton, StyledFormBox } from "./BookFormStyles";
import { bookFormSchema } from "./FormValidation";
import { useBookFormik } from "../../../hooks/formHook"; 

const BookForm: React.FC<{ onFormSubmit: () => void }> = ({ onFormSubmit }) => {
  const { mutate } = useSWRConfig();
  const formik = useBookFormik({ bookFormSchema, onFormSubmit, mutate });

  return (
    <StyledFormBox component="form" onSubmit={formik.handleSubmit} noValidate>
      <Typography variant="h4" sx={{ color: "black" }}>
        Add a New Book
      </Typography>
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
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
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
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
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
        error={formik.touched.genre && Boolean(formik.errors.genre)}
        helperText={formik.touched.genre && formik.errors.genre}
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
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <CenteredButton type="submit" variant="contained">
        Add Book
      </CenteredButton>
    </StyledFormBox>
  );
};

export default BookForm;
