import { FC } from 'react';

import { BookItem } from '@/pages/search/books/BookItem.tsx';
import { Book, getIsbn } from '@/pages/search/models/Book.ts';

interface Props {
  books: Book[];
}

export const BooksComponent: FC<Props> = ({ books }) => {
  return (
    <div className="flex gap-8 flex-wrap">
      {books.length === 0 ? (
        <div className="text text-center text-default-500">No books found</div>
      ) : null}
      {books.map((book) => (
        <BookItem key={getIsbn(book)} book={book} />
      ))}
    </div>
  );
};
