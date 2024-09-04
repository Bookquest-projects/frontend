import { useParams } from 'react-router-dom';

import { BookDetailsComponent } from '@/pages/search/books/BookDetailsComponent.tsx';
import { useBookQuery } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { DefaultLayout } from '@/layouts/default.tsx';

export const BookPage = () => {
  const { isbn } = useParams();

  const { data: book, isError, isPending } = useBookQuery(isbn || '');

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4">
        {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error loading book</div>
        ) : book ? (
          <BookDetailsComponent book={book} />
        ) : null}
      </div>
    </DefaultLayout>
  );
};
