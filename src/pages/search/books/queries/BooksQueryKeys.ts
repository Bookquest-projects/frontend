const BooksQueryKeys = {
  book: (isbn?: string) => ['book', isbn] as const,
  books: () => ['books'] as const,
  bookRecommendations: (isbn?: string, language?: string) =>
    ['book-recommendations', isbn, language] as const,
  bookByAuthor: (author?: string, language?: string) =>
    ['book-by-author', author, language] as const,
  booksBySeries: (isbn?: string) => ['books-by-series', isbn] as const,
  reviews: () => ['reviews'] as const,
  bookshelf: () => ['bookshelf'] as const,
};

export default BooksQueryKeys;
