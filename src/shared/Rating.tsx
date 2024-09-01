import { Star } from 'lucide-react';
import { FC } from 'react';

interface Props {
  rating: number;
  size?: number;
}

export const Rating: FC<Props> = ({ rating, size = 24 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        return i < rating ? (
          <Star key={i} className="text-primary" fill="#fdd94f" size={size} />
        ) : (
          <Star key={i} className="text-gray-500" size={size} />
        );
      })}
    </div>
  );
};
