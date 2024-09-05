import { ReactNode } from 'react';

import { Navbar } from '@/components/navbar';

export const DefaultLayout = ({
  children,
  gradient = false,
}: {
  children: ReactNode;
  gradient?: boolean;
}) => (
  <div
    className={
      gradient
        ? 'relative flex flex-col bg-[radial-gradient(circle_400px_at_90%_200px,#fdd94f,transparent)]'
        : 'relative flex flex-col'
    }
  >
    <Navbar />
    <main className="container mx-auto px-8 flex-grow pb-24 min-h-[calc(100dvh-8rem)]">
      {children}
    </main>

    <footer className="w-full flex flex-col p-4 items-center justify-center">
      <div className="flex items-center justify-center">
        <p className="text-small text-default-400">
          Copyright © 2024. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
);
