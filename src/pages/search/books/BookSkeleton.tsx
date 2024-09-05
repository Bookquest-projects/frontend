import { FC } from 'react';
import { Card, Skeleton } from '@nextui-org/react';

interface Props {
  isPending: boolean;
}

export const BookSkeleton: FC<Props> = ({ isPending }) => {
  return (
    <Card className="w-[200px] h-[300px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg" isLoaded={!isPending}>
        <div className="h-40 rounded-lg bg-secondary" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg" isLoaded={!isPending}>
          <div className="h-3 w-full rounded-lg bg-secondary" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg" isLoaded={!isPending}>
          <div className="h-3 w-full rounded-lg bg-secondary-300" />
        </Skeleton>
      </div>
    </Card>
  );
};
