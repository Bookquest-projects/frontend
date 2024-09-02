import axios, { AxiosError, AxiosResponse } from 'axios';

import { Book } from '@/pages/search/models/Book.ts';
import { Review } from '@/pages/search/models/Reviews.ts';

const BASE_API = import.meta.env.VITE_API_ENDPOINT + '/books';
const BOOKSHELF_API = import.meta.env.VITE_API_ENDPOINT + '/bookshelf';

axios.defaults.withCredentials = true;

const baseAxios = axios.create({
  baseURL: BASE_API,
});
const getBookByIsbn = (isbn: string): Promise<Book> =>
  baseAxios
    .get<Book, AxiosResponse>(`${BASE_API}/${isbn}`, {})
    .then((response) => response.data)
    .catch(() => {});

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
    .get<Book[], AxiosResponse>(`${BASE_API}/recommendations/${isbn}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new AxiosError(error);
    });

const getBookByAuthor = (author: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/books/${author}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new AxiosError(error);
    });

const getBooksBySeries = (isbn: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/books/${isbn}/series`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new AxiosError(error);
    });

const getReviews = (isbn: string): Promise<Review[]> =>
  baseAxios
    .get<Review[]>(`${BASE_API}/${isbn}/reviews`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new AxiosError(error);
    });

const getBookshelf = (name: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BOOKSHELF_API}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        name: name,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new AxiosError(error);
    });

const BooksApi = {
  postScan,
  getBookByIsbn,
  getBookRecommendations,
  getBookByAuthor,
  getBooksBySeries,
  getReviews,
  getBookshelf,
};

export default BooksApi;
