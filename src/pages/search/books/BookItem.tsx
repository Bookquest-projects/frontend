import { FC } from 'react';
import { Card, CardHeader, Image, Tooltip } from '@nextui-org/react';
import { Heart } from 'lucide-react';
import { Button } from '@nextui-org/button';

import { Book, getIsbn } from '@/pages/search/models/Book.ts';
import { Rating } from '@/shared/Rating.tsx';
import { BookCard } from '@/pages/search/books/BookCard.tsx';
import { useAddToFavoritesMutation } from '@/pages/search/books/queries/BooksQueryHooks.ts';

interface Props {
  book: Book;
}

export const BookItem: FC<Props> = ({ book }) => {
  const { mutate: addToFavorites } = useAddToFavoritesMutation();
  const handleAddToFavorites = () => {
    addToFavorites(getIsbn(book));
  };

  return (
    <Tooltip
      className="max-w-sm"
      content={
        <div className="flex p-4">
          <BookCard book={book} />
        </div>
      }
      delay={500}
      placement="top"
    >
      <Card isHoverable className="min-w-[180px] py-4">
        <CardHeader className="justify-center">
          <div className="flex">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="relative">
                <Image
                  alt={book.title}
                  fallbackSrc="https://placehold.co/150x200?text=Cover not found"
                  removeWrapper={true}
                  src={book.image_link}
                />
                <div className=" absolute top-0 right-0 z-10 p-1">
                  <Button
                    isIconOnly
                    className="bg-pink-500"
                    size="sm"
                    onPress={handleAddToFavorites}
                  >
                    <Heart />
                  </Button>
                </div>
              </div>
              <div className="gap-4">
                <p className=" text-small font-semibold leading-none text-default-600">
                  {book.title}
                </p>

                <p className=" text-sm text-default-500">
                  by &nbsp;
                  {book.authors.map((author) => (
                    <span key={author}>{author}</span>
                  ))}
                </p>
                {book.average_rating !== '' ? (
                  <Rating rating={parseInt(book.average_rating)} size={16} />
                ) : (
                  <Rating rating={0} size={16} />
                )}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Tooltip>
  );
};
