import React from "react";
import { useFormik } from "formik";
import { TextField, Button, CardActions } from "@mui/material";
import StyledEditBox from "./EditBookStyles";
import { IBook } from "../../types/types";

interface IEditBook {
  book: IBook;
  onSave: (book: IBook) => void;
  onCancel: () => void;
}

const EditBook: React.FC<IEditBook> = ({ book, onSave, onCancel }) => {
  const formik = useFormik({
    initialValues: book,
    onSubmit: (values) => {
      onSave(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledEditBox>
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
        <CardActions sx={{ justifyContent: "flex-end", p: 1.5 }}>
          <Button type="submit" size="small" variant="outlined">
            Save
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </CardActions>
      </StyledEditBox>
    </form>
  );
};

export default EditBook;
