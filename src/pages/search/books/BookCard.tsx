import { Button } from '@nextui-org/button';
import { ChevronDown, HeartIcon } from 'lucide-react';
import {
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from '@nextui-org/react';
import { FC, useState } from 'react';
import clsx from 'clsx';

import { Rating } from '@/shared/Rating.tsx';
import { Book, getIsbn } from '@/pages/search/models/Book.ts';
import {
  useAddToBookshelfMutation,
  useAddToFavoritesMutation,
} from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { useAuth } from '@/auth/AuthProvider.tsx';

interface Props {
  book: Book;
}

export const BookCard: FC<Props> = ({ book }) => {
  const { isAuthenticated } = useAuth();
  const { mutate: addToFavorites } = useAddToFavoritesMutation();
  const { mutate: addToBookshelf } = useAddToBookshelfMutation();

  const [showMore, setShowMore] = useState(false);
  const handleAddToFavorites = () => {
    addToFavorites(getIsbn(book));
  };
  const handleAddToBookshelf = (name: string) => {
    addToBookshelf({ isbn: getIsbn(book), name });
  };

  return (
    <div className="flex flex-col col-span-3 gap-4 min-w-[300px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text text-bold">{book.title}</p>
          <p className="text text-sm text-default-500">
            {book.authors.join(', ')}
          </p>
          <div className="py-2">
            {book.categories.map((categorie) => (
              <Chip
                key={categorie}
                classNames={{
                  base: 'bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30',
                  content: 'drop-shadow shadow-black text-white',
                }}
                size="sm"
              >
                {categorie}
              </Chip>
            ))}
          </div>
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
      <div>
        {showMore ? (
          <p className="text-justify text-sm">{book.description}</p>
        ) : (
          <p className="line-clamp-5 text-justify text-sm">
            {book.description}
          </p>
        )}
        <Button
          className="data-[hover=true]:bg-transparent group-data-[selected=true]:bg-transparent p-0 m-0 gap-0"
          color="secondary"
          radius="full"
          size="sm"
          variant="light"
          onPress={() => setShowMore(!showMore)}
        >
          {showMore ? 'Show less' : 'Show more'}
        </Button>
      </div>
      <div className="flex gap-4">
        <Tooltip content="Login to add to favorites" hidden={isAuthenticated}>
          <div className={clsx('cursor-pointer')}>
            <Button
              isIconOnly
              className="bg-pink-500"
              isDisabled={!isAuthenticated}
              onPress={handleAddToFavorites}
            >
              <HeartIcon />
            </Button>
          </div>
        </Tooltip>
        <Tooltip content="Login to add to bookshelf" hidden={isAuthenticated}>
          <div className={clsx('cursor-pointer')}>
            <Dropdown isDisabled={!isAuthenticated}>
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
                <DropdownItem
                  key="owned"
                  onPress={() => handleAddToBookshelf('owned')}
                >
                  Owned
                </DropdownItem>
                <DropdownItem
                  key="reading"
                  onPress={() => handleAddToBookshelf('reading')}
                >
                  Reading
                </DropdownItem>
                <DropdownItem
                  key="unfinished"
                  onPress={() => handleAddToBookshelf('unfinished')}
                >
                  Unfinished
                </DropdownItem>
                <DropdownItem
                  key="unwanted"
                  onPress={() => handleAddToBookshelf('unwanted')}
                >
                  Unwanted
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
