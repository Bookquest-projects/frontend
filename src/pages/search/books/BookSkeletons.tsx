import { FC } from 'react';

import { BookSkeleton } from '@/pages/search/books/BookSkeleton.tsx';

interface Props {
  isPending: boolean;
  length?: number;
}

export const BookSkeletons: FC<Props> = ({ isPending, length = 8 }) => {
  return (
    <div className="grid xl:grid-cols-6  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="flex justify-center w-[180px]">
          <BookSkeleton key={index} isPending={isPending} />
        </div>
      ))}
    </div>
  );
};
