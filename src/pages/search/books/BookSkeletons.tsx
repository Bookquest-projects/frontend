import { FC } from 'react';

import { BookSkeleton } from '@/pages/search/books/BookSkeleton.tsx';

interface Props {
  isPending: boolean;
}

export const BookSkeletons: FC<Props> = ({ isPending }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex justify-center">
          <BookSkeleton key={index} isPending={isPending} />
        </div>
      ))}
    </div>
  );
};
