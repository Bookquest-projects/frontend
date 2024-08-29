const SearchQueryKeys = {
  book: (isbn?: string) => ["quote", isbn] as const,
  books: () => ["books"] as const,
};

export default SearchQueryKeys;
