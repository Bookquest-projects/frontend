import { Tab, Tabs } from '@nextui-org/react';

import { DefaultLayout } from '@/layouts/default.tsx';
import { BooksComponent } from '@/pages/search/books/BooksComponent.tsx';
import { useAuth } from '@/auth/AuthProvider.tsx';
import { useBookshelfQuery } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { BookshelfPageLogin } from '@/pages/bookshelf/BookshelfPageLogin.tsx';
import { BookSkeletons } from '@/pages/search/books/BookSkeletons.tsx';

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

  return (
    <DefaultLayout>
      {!isAuthenticated ? (
        <section className="flex py-24">
          <div className="flex flex-col">
            <Tabs size="lg">
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
              <Tab key="reading" title="Reading">
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
