import React, { FC } from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

import { Rating } from '@/shared/Rating.tsx';
import { Review } from '@/pages/search/models/Reviews.ts';

interface Props {
  reviews: Review[];
}

export const ReviewsCard: FC<Props> = ({ reviews }) => {
  const [currentReview] = React.useState<Review>(reviews[0]);

  return (
    <Card>
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-4 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {currentReview.username}
            </h4>
            <Rating rating={1} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-4 text-small text-default-400">
        <p>{currentReview.description}</p>
      </CardBody>
    </Card>
  );
};
