import { Button } from '@nextui-org/button';
import { ChevronDown, HeartIcon } from 'lucide-react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { FC } from 'react';

import { Rating } from '@/shared/Rating.tsx';
import { Book } from '@/pages/search/models/Book.ts';

interface Props {
  book: Book;
}

export const BookCard: FC<Props> = ({ book }) => {
  return (
    <div className="flex flex-col col-span-3 gap-4 min-w-[300px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text text-bold">{book.title}</p>
          <p className="text text-sm text-default-500">
            {book.authors.map((author) => (
              <div key={author}>{author}</div>
            ))}
          </p>
        </div>
        <div className="flex flex-col">
          {book.average_rating !== '' ? (
            <>
              <Rating rating={parseInt(book.average_rating)} />
              <p className="text text-sm text-default-500">
                {book.ratings_count} reviews
              </p>
            </>
          ) : (
            <>
              <Rating rating={0} />
              <p className="text text-xs text-default-500">No ratings yet</p>
            </>
          )}
        </div>
      </div>
      <p className="line-clamp-5 text-justify text-sm">{book.description}</p>
      <div className="flex gap-4">
        <Button isIconOnly className="bg-pink-500">
          <HeartIcon />
        </Button>
        <Dropdown>
          <DropdownTrigger>
            <Button
              color="primary"
              endContent={
                <div>
                  <ChevronDown />
                </div>
              }
            >
              Add to bookshelf
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="new">Owned</DropdownItem>
            <DropdownItem key="copy">Reading</DropdownItem>
            <DropdownItem key="edit">Unfinished</DropdownItem>
            <DropdownItem key="delete">Unwanted</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};
