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

export interface Bookshelf {
  favorite: Book[];
  no_way: Book[];
  not_finished: Book[];
  owned: Book[];
  read: Book[];
  reading: Book[];
  to_be_read: Book[];
}

export const getIsbn = (book: Book): string =>
  book.isbn_13 !== '' ? book.isbn_13 : book.isbn_10;
