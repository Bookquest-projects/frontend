import axios, { AxiosResponse } from "axios";

import { Book } from "@/pages/search/models/Book.ts";

const BASE_API = "http://localhost:5000/books";

export const login = (isbn: number): Promise<Book> =>
  axios
    .get<Book>(`${BASE_API}/${isbn}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const postScan = (formData: FormData): Promise<Book> =>
  axios
    .post<Book, AxiosResponse>(`${BASE_API}/scan`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });

const AuthApi = {
  login,
};

export default AuthApi;
