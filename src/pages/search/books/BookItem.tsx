import { FC } from 'react';
import { Card, CardBody, Image, Tooltip } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { Book, getIsbn } from '@/pages/search/models/Book.ts';
import { Rating } from '@/shared/Rating.tsx';
import { BookCard } from '@/pages/search/books/BookCard.tsx';
import { useAuth } from '@/auth/AuthProvider.tsx';

interface Props {
  book: Book;
}

export const BookItem: FC<Props> = ({ book }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();

  return (
    <Card
      isHoverable
      isPressable
      className="flex w-[230px] p-4"
      onPress={() => {
        navigate(`/book/${getIsbn(book)}`);
        queryClient.clear();
      }}
    >
      <Tooltip content="Login to add to favorites">
        <div className="absolute top-0 right-0 z-10 p-1" />
      </Tooltip>
      <Tooltip
        className="max-w-sm"
        closeDelay={1000}
        content={
          <div className="flex p-4">
            <BookCard actions={isAuthenticated} book={book} />
          </div>
        }
        delay={500}
        placement="top"
      >
        <CardBody>
          <div className="flex flex-col flex-grow gap-4 justify-center">
            <div className="flex justify-center">
              <Image
                alt={book.title}
                className="flex"
                fallbackSrc="https://placehold.co/150x200?text=No+Image"
                removeWrapper={true}
                src={
                  book.image_link !== ''
                    ? book.image_link
                    : 'https://placehold.co/150x200?text=No+Image'
                }
              />
            </div>
            <div className="flex flex-col flex-grow justify-start items-start">
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
          </div>
        </CardBody>
      </Tooltip>
    </Card>
  );
};
