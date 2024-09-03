export interface Book {
  authors: string[];
  average_rating: string;
  categories: string[];
  description: string;
  image_link: string;
  isbn_10: string;
  isbn_13: string;
  language: string;
  page_count: number;
  published_date: string;
  publisher: string;
  ratings_count: number;
  subtitle: string;
  title: string;
}

export const getIsbn = (book: Book): string =>
  book.isbn_13 !== '' ? book.isbn_13 : book.isbn_10;

export const getLanguage = (book: Book): string => book.language;
