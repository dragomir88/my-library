import { useFormik } from "formik";
import { z } from "zod";
import axios from "axios";
import { API_URL } from "../services/bookService";
import { BookFormValues } from "../types/types";

export const useBookFormik = ({
  bookFormSchema,
  onFormSubmit,
  mutate,
}: {
  bookFormSchema: z.ZodSchema<BookFormValues>;
  onFormSubmit: () => void;
  mutate: Function;
}) => {
  return useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      description: "",
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
        await axios.post(API_URL, values);
        mutate("books");
        resetForm();
        onFormSubmit();
      } catch (error) {
        console.error("There was an error adding the book:", error);
      }
    },
  });
};
