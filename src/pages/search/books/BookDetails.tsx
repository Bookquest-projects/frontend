import { Image } from '@nextui-org/react';
import { FC } from 'react';

import { Book } from '@/pages/search/models/Book.ts';
import { BookCard } from '@/pages/search/books/BookCard.tsx';

interface Props {
  book: Book;
}

export const BookDetails: FC<Props> = ({ book }) => (
  <div className="col-span-2">
    <div className="grid md:grid-cols-4 md:pb-8 gap-8">
      <div className="flex content-center">
        <Image alt={book.title} removeWrapper={true} src={book.image_link} />
      </div>
      <BookCard book={book} />
    </div>
  </div>
);
