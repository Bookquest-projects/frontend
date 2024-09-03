import axios, { AxiosResponse } from 'axios';

import { Book } from '@/pages/search/models/Book.ts';
import { Review } from '@/pages/search/models/Reviews.ts';

const BASE_API = import.meta.env.VITE_API_ENDPOINT + '/books';

axios.defaults.withCredentials = true;

const baseAxios = axios.create({
  baseURL: BASE_API,
});
const getBookByIsbn = (isbn: string): Promise<Book> =>
  baseAxios
    .get<Book>(`${BASE_API}/${isbn}`, {})
    .then((response) => response.data);

const postScan = (formData: FormData): Promise<Book> =>
  baseAxios
    .post<Book, AxiosResponse>(`${BASE_API}/scan`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch(() => {});

const getBookRecommendations = (isbn: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/${isbn}/recommendations`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data);

const getBookByAuthor = (
  author: string,
  language?: string
): Promise<Book[]> => {
  const url = language
    ? `${BASE_API}/authors/${author}?lang=${language}`
    : `${BASE_API}/authors/${author}`;

  return baseAxios
    .get<Book[]>(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getBooksBySeries = (isbn: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/${isbn}/series`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data);

const getReviews = (isbn: string): Promise<Review[]> =>
  baseAxios
    .get<Review[]>(`${BASE_API}/reviews/${isbn}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data);

const BooksApi = {
  postScan,
  getBookByIsbn,
  getBookRecommendations,
  getBookByAuthor,
  getBooksBySeries,
  getReviews,
};

export default BooksApi;
