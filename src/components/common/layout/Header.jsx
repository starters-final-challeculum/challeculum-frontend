import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GroundFilter } from '../elements/GroundFilter';
import { Search } from '../elements/Search';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import logo from '../../../static/images/logo.png';

export function Header({ isAuthenticated }) {
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('asc');
  const [orderBy, setOrderBy] = useState('created_at');

  const navigate = useNavigate();
  const location = useLocation();
  const context = useGlobalContext();

  const handleSearchButtonClick = () => {
    console.log(context);
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-medium text-gray-900">
            <img src={logo} alt="" className="w-56" />
          </a>
          {location.pathname === '/main'
            && (
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
            )}

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
                    className="py-2 px-4 rounded-3xl font-medium hover:bg-gray-100"
                  >
                    로그인
                  </a>
                  <a
                    href="/register"
                    className="py-2 px-4 rounded-3xl font-medium hover:bg-gray-100"
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
