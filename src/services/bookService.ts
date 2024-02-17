import axios from 'axios';
 
export const API_URL = 'http://localhost:3001/books';
export interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
}
 
export const getBooks = async () => {
  const response = await axios.get<IBook[]>(API_URL);
  return response.data;  
};
 
export const addBook = async (book: IBook) => {
  const response = await axios.post<IBook>(API_URL, book);
  return response.data;  
};
 
export const updateBook = async (id: number, book: IBook) => {
  const response = await axios.put<IBook>(`${API_URL}/${id}`, book);
  return response.data;  
};
 
export const deleteBook = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};