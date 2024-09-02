import { FC } from 'react';

import { BookSkeleton } from '@/pages/search/books/BookSkeleton.tsx';

interface Props {
  isPending: boolean;
  length?: number;
}

export const BookSkeletons: FC<Props> = ({ isPending, length = 8 }) => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-8">
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="flex justify-center">
          <BookSkeleton key={index} isPending={isPending} />
        </div>
      ))}
    </div>
  );
};
