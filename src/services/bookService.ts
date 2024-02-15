// bookService.ts
import axios from 'axios';

// Define the base URL for your API
export const API_URL = 'http://localhost:3001/books';

// Define the structure of your book object
export interface IBook {
  id: number; // id might be optional for creation
  title: string;
  author: string;
  genre: string;
  description: string;
}

// Get all books
export const getBooks = async () => {
  const response = await axios.get<IBook[]>(API_URL);
  return response.data; // this will return the array of books
};

// Add a new book
export const addBook = async (book: IBook) => {
  const response = await axios.post<IBook>(API_URL, book);
  return response.data; // this will return the new book with an id assigned
};

// Update a book
export const updateBook = async (id: number, book: IBook) => {
  const response = await axios.put<IBook>(`${API_URL}/${id}`, book);
  return response.data; // this will return the updated book object
};

// Delete a book
export const deleteBook = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data; // this might return an empty object or the id of the deleted book
};
