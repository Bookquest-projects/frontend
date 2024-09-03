import { Link } from '@nextui-org/link';

export const BookshelfPageLogin = () => {
  return (
    <section className="flex md:p-24">
      <div className="flex flex-col">
        <div className="flex flex-col py-8 justify-center">
          <h1 className="text-3xl">
            Please{' '}
            <Link
              className="text-3xl from-secondary to-secondary-500 tracking-tight inline font-semibold bg-clip-text text-transparent bg-gradient-to-b"
              href="/login"
            >
              login
            </Link>{' '}
            or{' '}
            <Link
              className="text-3xl to-primary from-[#FDD24F] tracking-tight inline font-semibold bg-clip-text text-transparent bg-gradient-to-b text-primary"
              href="/sign-up"
            >
              sign up
            </Link>{' '}
            to view your bookshelf.
          </h1>
        </div>
      </div>
    </section>
  );
};
