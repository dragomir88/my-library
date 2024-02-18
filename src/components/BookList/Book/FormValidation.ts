import { z } from 'zod';

export const bookFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});