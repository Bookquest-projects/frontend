import { Tab, Tabs } from '@nextui-org/react';

import { DefaultLayout } from '@/layouts/default.tsx';
import { BooksComponent } from '@/pages/search/books/BooksComponent.tsx';
import { useAuth } from '@/auth/AuthProvider.tsx';
import { useBookshelfQuery } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { BookSkeletons } from '@/pages/search/books/BookSkeletons.tsx';
import { BookshelfPageLogin } from '@/pages/bookshelf/BookshelfPageLogin.tsx';

export const BookshelfPage = () => {
  const { isAuthenticated } = useAuth();
  const {
    data: booksReading,
    isLoading: isLoading,
    isError: isError,
  } = useBookshelfQuery('reading');

  const {
    data: booksOwned,
    isLoading: isLoadingOwned,
    isError: isErrorOwned,
  } = useBookshelfQuery('owned');

  const {
    data: booksUnfinished,
    isLoading: isLoadingUnfinished,
    isError: isErrorUnfinished,
  } = useBookshelfQuery('unfinished');

  const {
    data: booksUnwanted,
    isLoading: isLoadingUnwanted,
    isError: isErrorUnwanted,
  } = useBookshelfQuery('unwanted');

  const {
    data: booksFavorite,
    isLoading: isLoadingFavorite,
    isError: isErrorFavorite,
  } = useBookshelfQuery('favorite');

  const {
    data: booksFinished,
    isLoading: isLoadingFinished,
    isError: isErrorFinished,
  } = useBookshelfQuery('finished');

  // TODO owned, favorite, finished, reading, unfinished
  // owned, favorite, read, reading, unwanted, not finished
  return (
    <DefaultLayout>
      {isAuthenticated ? (
        <section className="flex py-8">
          <div className="flex w-full flex-col gap-8">
            <Tabs color="primary" size="md">
              <Tab key="owned" title="Owned">
                {isLoadingOwned ? (
                  <BookSkeletons isPending={isLoadingOwned} />
                ) : (
                  <div>
                    {isErrorOwned ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksOwned || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="favorite" title="Favorite">
                {isLoadingFavorite ? (
                  <BookSkeletons isPending={isLoadingFavorite} />
                ) : (
                  <div>
                    {isErrorFavorite ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksFavorite || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="reading" title="To be read">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksReading || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="finished" title="Finished">
                {isLoadingFinished ? (
                  <BookSkeletons isPending={isLoadingFinished} />
                ) : (
                  <div>
                    {isErrorFinished ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksFinished || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="unfinished" title="Unfinished">
                {isLoadingUnfinished ? (
                  <BookSkeletons isPending={isLoadingUnfinished} />
                ) : (
                  <div>
                    {isErrorUnfinished ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksUnfinished || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="unwanted" title="Unwanted">
                {isLoadingUnwanted ? (
                  <BookSkeletons isPending={isLoadingUnwanted} />
                ) : (
                  <div>
                    {isErrorUnwanted ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksUnwanted || []} />
                    )}
                  </div>
                )}
              </Tab>
            </Tabs>
          </div>
        </section>
      ) : (
        <BookshelfPageLogin />
      )}
    </DefaultLayout>
  );
};
