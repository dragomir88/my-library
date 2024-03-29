import React, { useState } from "react";
import { Box, Zoom } from "@mui/material";
import AddBookButton from "./AddBookButton/AddBookButton";
import { AddBookButtonContainer, BookFormContainer } from "./AddBookStyles";
import GenericBookForm from "../BookList/Book/GenericBookForm";

const AddBook: React.FC = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <AddBookButtonContainer formVisible={formVisible}>
        <AddBookButton onClick={toggleFormVisibility} />
      </AddBookButtonContainer>
      <Zoom in={formVisible} style={{ width: "100%" }} timeout={{ enter: 500, exit: 300 }}>
        <BookFormContainer formVisible={formVisible}>
          <GenericBookForm onCancel={toggleFormVisibility} />
        </BookFormContainer>
      </Zoom>
    </Box>
  );
};

export default AddBook;
