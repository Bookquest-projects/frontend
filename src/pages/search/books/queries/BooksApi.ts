import axios from 'axios';

import { Book } from '@/pages/search/models/Book.ts';
import { Review } from '@/pages/search/models/Reviews.ts';
import { getCookie } from '@/shared/cookies.ts';

const BASE_API = import.meta.env.VITE_API_ENDPOINT + '/books';
const BOOKSHELF_API = import.meta.env.VITE_API_ENDPOINT + '/bookshelf';

axios.defaults.withCredentials = true;

const baseAxios = axios.create({
  baseURL: BASE_API,
});

const getBookByIsbn = (isbn: string): Promise<Book> =>
  baseAxios
    .get<Book>(`${BASE_API}/${isbn}`, {})
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const postScan = (formData: FormData): Promise<Book> =>
  baseAxios
    .post<Book>(`${BASE_API}/scan`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const getBookRecommendations = (
  isbn: string,
  language: string
): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/${isbn}/recommendations`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        ...(language ? { lang: language } : {}),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const getBookByAuthor = (author: string, language?: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/authors/${author}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        ...(language ? { lang: language } : {}),
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const getBooksBySeries = (isbn: string): Promise<Book[]> =>
  baseAxios
    .get<Book[]>(`${BASE_API}/${isbn}/series`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const getReviews = (isbn: string): Promise<Review[]> =>
  baseAxios
    .get<Review[]>(`${BASE_API}/reviews/${isbn}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
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
      throw error;
    });

const addToBookshelf = (isbn: string, name: string): Promise<void> =>
  baseAxios
    .post(
      `${BOOKSHELF_API}/${isbn}`,
      {
        name: name,
      },
      {
        headers: {
          'X-CSRF-TOKEN': getCookie('csrf_access_token'),
        },
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const addToFavorites = (isbn: string): Promise<void> =>
  baseAxios
    .post(
      `${BASE_API}/favorites/${isbn}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': getCookie('csrf_access_token'),
        },
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const addToOwned = (isbn: string): Promise<void> =>
  baseAxios
    .post(
      `${BASE_API}/owned/${isbn}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': getCookie('csrf_access_token'),
        },
        withCredentials: true,
      }
    )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const BooksApi = {
  postScan,
  getBookByIsbn,
  getBookRecommendations,
  getBookByAuthor,
  getBooksBySeries,
  getReviews,
  getBookshelf,
  addToBookshelf,
  addToFavorites,
  addToOwned,
};

export default BooksApi;
