import React from 'react';
import Layout from './Layout';
import SearchBar from './SearchBar';
import DetailTags from './DetailTags';

function Search() {
  return (
    <Layout>
      <SearchBar />
      <DetailTags />
    </Layout>
  );
}

export default Search;
