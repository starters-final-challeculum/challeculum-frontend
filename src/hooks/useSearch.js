import React, { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [orderBy, setOrderBy] = useState('created_at');
  const [filter, setFilter] = useState('');

  const value = useMemo(() => ({
    keyword,
    setKeyword,
    filter,
    setFilter,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
  }), [keyword, filter, sortBy, orderBy]);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
