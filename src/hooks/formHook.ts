import { useFormik } from "formik";
import { addBook, updateBook } from "../services/bookService";  
import { BookFormValues, IBook } from "../types/types";
import { z } from "zod";

export const useBookFormik = ({
  bookFormSchema,
  currentBook,
  onFormSubmit,
  mutate,
}: {
  bookFormSchema: z.ZodSchema<BookFormValues>;
  currentBook?: IBook | null;
  onFormSubmit: (book?: IBook) => void;   
  mutate: Function;
}) => {
  return useFormik({
    initialValues: {
      title: currentBook?.title || "",
      author: currentBook?.author || "",
      genre: currentBook?.genre || "",
      description: currentBook?.description || "",
    },
    validate: (values) => {
      try {
        bookFormSchema.parse(values);
        return {};
      } catch (error) {
        if (error instanceof z.ZodError) {
          return error.flatten().fieldErrors;
        }
        console.error(error);
        return {};
      }
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = currentBook
          ? await updateBook(currentBook.id, values)
          : await addBook(values);
        mutate("books");
        resetForm();
        onFormSubmit(response);
      } catch (error) {
        console.error("There was an error processing the book:", error);
      }
    },
  });
};
