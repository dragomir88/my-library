import { useFormik } from "formik";
import { addBook, updateBook } from "../services/bookService";
import { BookFormValues, IBook } from "../types/types";
import { z } from "zod";

export interface UseBookFormikParams {
  bookFormSchema: z.ZodSchema<BookFormValues>;
  currentBook?: IBook | null;
  onFormSubmit: (book?: IBook) => void;
  mutate: Function;
}
interface OnSubmitFunction {
  (
    values: Partial<IBook>,
    formikHelpers: { resetForm: () => void }
  ): Promise<void>;
}

export const useBookFormik = ({
  bookFormSchema,
  currentBook,
  onFormSubmit,
  mutate,
}: UseBookFormikParams) => {
  const initialValues: Partial<IBook> = {
    title: currentBook?.title || "",
    author: currentBook?.author || "",
    genre: currentBook?.genre || "",
    description: currentBook?.description || "",
  };

  const validate = (values: Partial<IBook>) => {
    try {
      bookFormSchema.parse(values as IBook);
      return {};
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      }
      console.error(error);
      return {};
    }
  };

  const onSubmit: OnSubmitFunction = async (values, { resetForm }) => {
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
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  return formik;
};
