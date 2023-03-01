import React, { createContext, useState, useMemo } from 'react';

export const SearchContext = createContext();

export function ContextProvider({ children }) {
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [orderBy, setOrderBy] = useState('created_at');
  const [status, setStatus] = useState('');
  const [platform, setPlatform] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [filter, setFilter] = useState('status:all');

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
    console.log(filterString);
    return filterString;
  };

  const handleSortByToggle = () => {
    setSortBy((prevSortBy) => (prevSortBy === 'asc' ? 'desc' : 'asc'));
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
    categoryId,
    setCategoryId,
    filter,
    setFilter,
    generateFilterString,
    handleSortByToggle,
  }), [keyword, sortBy, orderBy, status, platform, categoryId, filter]);
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useGlobalContext() {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
