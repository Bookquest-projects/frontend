const BooksQueryKeys = {
  book: (isbn?: string) => ['book', isbn] as const,
  books: () => ['books'] as const,
  bookRecommendations: (isbn?: string) =>
    ['book-recommendations', isbn] as const,
  bookByAuthor: (author?: string) => ['book-by-author', author] as const,
  booksBySeries: (isbn?: string) => ['books-by-series', isbn] as const,
  reviews: (isbn?: string) => ['reviews', isbn] as const,
};

export default BooksQueryKeys;
