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
    data: booksTobeRead,
    isLoading: isLoadingToBeRead,
    isError: isErrorToBeRead,
  } = useBookshelfQuery('to_be_read');

  const {
    data: booksOwned,
    isLoading: isLoadingOwned,
    isError: isErrorOwned,
  } = useBookshelfQuery('owned');

  const {
    data: booksUnfinished,
    isLoading: isLoadingUnfinished,
    isError: isErrorUnfinished,
  } = useBookshelfQuery('not_finished');

  const {
    data: booksUnwanted,
    isLoading: isLoadingUnwanted,
    isError: isErrorUnwanted,
  } = useBookshelfQuery('no_way');

  const {
    data: booksFavorite,
    isLoading: isLoadingFavorite,
    isError: isErrorFavorite,
  } = useBookshelfQuery('favorite');

  const {
    data: booksFinished,
    isLoading: isLoadingFinished,
    isError: isErrorFinished,
  } = useBookshelfQuery('read');

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

              <Tab key="reading" title="Ongoing">
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
              <Tab key="to_be_read" title="To be read">
                {isLoadingToBeRead ? (
                  <BookSkeletons isPending={isLoadingToBeRead} />
                ) : (
                  <div>
                    {isErrorToBeRead ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={booksTobeRead || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="read" title="Finished">
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
              <Tab key="no-way" title="Unwanted">
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
