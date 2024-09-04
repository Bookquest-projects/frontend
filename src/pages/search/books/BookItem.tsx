import { FC } from 'react';
import { Card, Image, Tooltip } from '@nextui-org/react';
import { Heart } from 'lucide-react';
import { Button } from '@nextui-org/button';
import { useNavigate } from 'react-router-dom';

import { Book, getIsbn } from '@/pages/search/models/Book.ts';
import { Rating } from '@/shared/Rating.tsx';
import { BookCard } from '@/pages/search/books/BookCard.tsx';
import { useAddToFavoritesMutation } from '@/pages/search/books/queries/BooksQueryHooks.ts';
import { useAuth } from '@/auth/AuthProvider.tsx';

interface Props {
  book: Book;
}

export const BookItem: FC<Props> = ({ book }) => {
  const { mutate: addToFavorites } = useAddToFavoritesMutation();
  const handleAddToFavorites = () => {
    addToFavorites(getIsbn(book));
  };
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <Card
      isHoverable
      isPressable
      className="flex flex-col w-[250px] p-4 justify-center"
      onPress={() => navigate(`/book/${getIsbn(book)}`)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-grow justify-center">
          <Image
            alt={book.title}
            fallbackSrc="https://placehold.co/128x163"
            removeWrapper={true}
            src={
              book.image_link !== ''
                ? book.image_link
                : 'https://placehold.co/150x200?text=No+Image'
            }
          />
          <div className=" absolute top-0 right-0 z-10 p-1">
            <Button
              isIconOnly
              className="bg-pink-500"
              isDisabled={!isAuthenticated}
              size="sm"
              onPress={handleAddToFavorites}
            >
              <Heart />
            </Button>
          </div>
        </div>
        <Tooltip
          className="max-w-sm"
          closeDelay={1000}
          content={
            <div className="flex p-4">
              <BookCard book={book} />
            </div>
          }
          delay={500}
          placement="top"
        >
          <div className="flex flex-col justify-start items-start">
            <div className=" text-small font-semibold text-default-600 text-left">
              {book.title}
            </div>

            {book.authors.length > 0 ? (
              <p className=" text-sm text-default-500 text-left">
                by&nbsp;
                {book.authors.join(', ')}
              </p>
            ) : (
              <p className=" text-sm text-default-500 text-left">No author</p>
            )}
            {book.average_rating !== '' ? (
              <Rating rating={parseInt(book.average_rating)} size={16} />
            ) : (
              <Rating rating={0} size={16} />
            )}
          </div>
        </Tooltip>
      </div>
    </Card>
  );
};
