import { Tab, Tabs } from '@nextui-org/react';

import { DefaultLayout } from '@/layouts/default.tsx';
import { BooksComponent } from '@/pages/search/books/BooksComponent.tsx';
import { useAuth } from '@/auth/AuthProvider.tsx';
import { useBookshelfQuery } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { BookSkeletons } from '@/pages/search/books/BookSkeletons.tsx';
import { BookshelfPageLogin } from '@/pages/bookshelf/BookshelfPageLogin.tsx';

export const BookshelfPage = () => {
  const { isAuthenticated } = useAuth();
  const { data: books, isLoading, isError } = useBookshelfQuery();

  return (
    <DefaultLayout>
      {isAuthenticated ? (
        <section className="flex py-8">
          <div className="flex w-full flex-col gap-8">
            <Tabs color="primary" size="md">
              <Tab key="owned" title="Owned">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={books?.owned || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="favorite" title="Favorite">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={books?.favorite || []} />
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
                      <BooksComponent books={books?.reading || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="to_be_read" title="To be read">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={books?.to_be_read || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="read" title="Finished">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={books?.read || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="unfinished" title="Unfinished">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={books?.not_finished || []} />
                    )}
                  </div>
                )}
              </Tab>
              <Tab key="no-way" title="Unwanted">
                {isLoading ? (
                  <BookSkeletons isPending={isLoading} />
                ) : (
                  <div>
                    {isError ? (
                      <div className="text-danger text-small">
                        Could not load books
                      </div>
                    ) : (
                      <BooksComponent books={books?.no_way || []} />
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
