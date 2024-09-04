import { FC } from 'react';
import { Tab, Tabs } from '@nextui-org/react';

import { Book, getIsbn } from '@/pages/search/models/Book.ts';
import { header } from '@/components/primitives.ts';
import { BookDetails } from '@/pages/search/books/BookDetails.tsx';
import { ReviewsCard } from '@/pages/search/books/ReviewsCard.tsx';
import { BooksComponent } from '@/pages/search/books/BooksComponent.tsx';
import {
  useBookByAuthorQuery,
  useBookBySeriesQuery,
  useBookRecommendationsQuery,
  useReviewsQuery,
} from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { BookSkeletons } from '@/pages/search/books/BookSkeletons.tsx';

interface Props {
  book: Book;
}

export const BookPage: FC<Props> = ({ book }) => {
  const { data: reviews } = useReviewsQuery(getIsbn(book));

  const {
    data: authorBooks,
    isError: isAuthorBooksError,
    isPending: isAuthorBooksPending,
  } = useBookByAuthorQuery(book.authors[0]);

  const {
    data: recommendedBooks,
    isError: isRecommendedBooksError,
    isPending: isRecommendedBooksPending,
  } = useBookRecommendationsQuery(getIsbn(book));
  const {
    data: seriesBooks,
    isError: isSeriesBooksError,
    isPending: isSeriesBooksPending,
  } = useBookBySeriesQuery(getIsbn(book));

  return (
    <div className="flex flex-col gap-4">
      <div
        className={header({
          class: 'py-8',
        })}
      >
        Book details
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        <BookDetails book={book} />
        <div className="flex flex-col gap-4">
          {reviews && reviews.length > 0 ? (
            <ReviewsCard reviews={reviews} />
          ) : null}
        </div>
      </div>
      <div className="flex w-full flex-col gap-8">
        <Tabs>
          <Tab key="photos" title="Suggestions">
            {isRecommendedBooksError ? (
              <div className="text-danger text-small">
                Could not load suggestions
              </div>
            ) : (
              <>
                {isRecommendedBooksPending ? (
                  <BookSkeletons isPending={isRecommendedBooksPending} />
                ) : null}
                <BooksComponent books={recommendedBooks || []} />
              </>
            )}
          </Tab>
          <Tab key="music" title="From this author">
            {isAuthorBooksError ? (
              <div className="text-danger text-small">
                Could not load books by author
              </div>
            ) : (
              <>
                {isAuthorBooksPending ? (
                  <BookSkeletons isPending={isAuthorBooksPending} />
                ) : null}
                <BooksComponent books={authorBooks || []} />
              </>
            )}
          </Tab>
          <Tab key="videos" title="From this series">
            {isSeriesBooksError ? (
              <div className="text-danger text-small">
                Could not load books by series
              </div>
            ) : (
              <>
                {isSeriesBooksPending ? (
                  <BookSkeletons isPending={isAuthorBooksPending} />
                ) : null}
                <BooksComponent books={seriesBooks || []} />
              </>
            )}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
