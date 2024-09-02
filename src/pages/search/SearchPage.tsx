import { useState } from 'react';

import { DefaultLayout } from '@/layouts/default.tsx';
import { CameraComponent } from '@/pages/search/CameraComponent.tsx';
import { ScanComponent } from '@/pages/search/ScanComponent.tsx';
import { Book } from '@/pages/search/models/Book.ts';
import { BookPage } from '@/pages/search/books/BookPage.tsx';

export const SearchPage = () => {
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState<Book | null>(null);

  const onCameraClick = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col gap-8">
        {open ? (
          <CameraComponent onClose={onClose} />
        ) : (
          <div className="md:px-24 pt-24">
            <ScanComponent setBook={setBook} onCameraClick={onCameraClick} />
          </div>
        )}
        {book ? <BookPage book={book} /> : null}
      </section>
    </DefaultLayout>
  );
};
