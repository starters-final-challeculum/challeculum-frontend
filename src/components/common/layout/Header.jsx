import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GroundFilter } from '../elements/GroundFilter';
import { Search } from '../elements/Search';
import { useSearch } from '../../../hooks/useSearch';

export function Header({ isAuthenticated }) {
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [orderBy, setOrderBy] = useState('created_at');

  const navigate = useNavigate();
  const context = useSearch();

  const handleSearchButtonClick = () => {
    console.log(context);
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-medium text-gray-900">
            Challeculum
          </a>
          <div className="hidden md:flex items-center justify-center flex-grow">
            <GroundFilter />
            <Search
              keyword={keyword}
              setKeyword={setKeyword}
              sortBy={sortBy}
              setSortBy={setSortBy}
              orderBy={orderBy}
              setOrderBy={setOrderBy}
              onSearchButtonClick={handleSearchButtonClick}
            />
          </div>
          <div className="hidden md:flex items-center justify-center ml-3">
            <div className="flex items-center">
              {isAuthenticated ? (
                <div className="ml-3 flex items-center">
                  <a
                    href="/profile"
                    className="py-2 px-4 rounded-3xl font-medium hover:bg-gray-100"
                  >
                    내정보
                  </a>
                  <button
                    onClick={() => {
                      localStorage.removeItem('Authorization');
                      localStorage.removeItem('RefreshToken');
                      navigate('/');
                    }}
                    className="py-2 px-4 rounded-3xl font-medium hover:bg-gray-100"
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <div className="ml-3 flex items-center">
                  <a
                    href="/login"
                    className="border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 py-2 px-4 rounded-3xl font-medium"
                  >
                    로그인
                  </a>
                  <a
                    href="/register"
                    className="bg-gray-900 text-white py-2 px-4 rounded-3xl ml-3 font-medium"
                  >
                    회원가입
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
