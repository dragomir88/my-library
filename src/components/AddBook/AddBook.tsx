import React, { useState } from "react";
import { Box, Zoom } from "@mui/material";
import AddBookButton from "./AddBookButton/AddBookButton";
import BookForm from "./BookForm/BookForm";
import { AddBookButtonContainer } from "./AddBookStyles";

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
      <Zoom
        in={formVisible}
        style={{ width: "100%" }}
        timeout={{ enter: 500, exit: 300 }}
      >
        <div style={{ display: formVisible ? "block" : "none" }}>
          <BookForm onFormSubmit={toggleFormVisibility} />
        </div>
      </Zoom>
    </Box>
  );
};

export default AddBook;
