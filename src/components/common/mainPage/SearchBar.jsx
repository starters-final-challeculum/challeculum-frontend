import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components/';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const onChangeHandler = (e) => {
    const {
      target: { value },
    } = e;
    setKeyword(value);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-3 justify-center flex">
        <form className="md:w-4/5 w-full">
          <div className="relative">
            <SearchInput type="input" placeholder="검색어를 입력하세요" onChange={onChangeHandler} required />
            <SearchButton type="submit" onClick={() => navigate(`/search/${keyword}`)}>
              <BsSearch className="text-mBlack hover:text-gray-500 hover:text-2xl" size={30} />
            </SearchButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;

const SearchInput = tw.input`block py-4 pl-8 w-full text-base text-gray-900 bg-gray-50 rounded-full border border-gray-300`;
const SearchButton = tw.button`absolute right-4 bottom-1.5 focus:outline-none px-3 py-2`;
