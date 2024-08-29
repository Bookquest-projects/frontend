const SearchQueryKeys = {
  book: (isbn?: number) => ["quote", isbn] as const,
  books: () => ["books"] as const,
};

export default SearchQueryKeys;
