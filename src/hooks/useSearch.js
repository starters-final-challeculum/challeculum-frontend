import React, { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [orderBy, setOrderBy] = useState('created_at');
  const [status, setStatus] = useState('waiting');
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');
  const [filter, setFilter] = useState('status:waiting');

  const generateFilterString = (map) => {
    let filterString = '';
    map.forEach((filterValue, filterKey) => {
      if (filterValue !== '') {
        if (filterString !== '') {
          filterString += ',';
        }
        filterString += `${filterKey}:${filterValue}`;
      }
    });
    return filterString;
  };

  const value = useMemo(() => ({
    keyword,
    setKeyword,
    sortBy,
    setSortBy,
    orderBy,
    setOrderBy,
    status,
    setStatus,
    platform,
    setPlatform,
    category,
    setCategory,
    filter,
    setFilter,
    generateFilterString,
  }), [keyword, sortBy, orderBy, status, platform, category, filter]);

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
