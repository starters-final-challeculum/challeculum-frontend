import React, { useState } from 'react';
import {
  FaBars, FaMapMarkerAlt, FaUserCircle, FaShoppingBag, FaSearch,
} from 'react-icons/fa';

export function Header({ isAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-medium text-gray-900">
            UberEats
          </a>
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-1/2">
              <input
                type="text"
                className="w-full bg-gray-100 text-gray-800 font-medium focus:outline-none"
                placeholder="그라운드 검색"
              />
              <button className="text-gray-500 focus:outline-none ml-4">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button className="hidden md:block mr-3">
              <FaMapMarkerAlt className="text-gray-600" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center md:hidden"
            >
              <FaBars className="text-gray-600" />
            </button>
            {isAuthenticated ? (
              <div className="ml-3 flex items-center">
                <button className="mr-3">
                  <FaShoppingBag className="text-gray-600" />
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="focus:outline-none"
                >
                  <FaUserCircle className="text-gray-600" />
                </button>
                <div
                  className={`${
                    isMenuOpen ? 'block' : 'hidden'
                  } absolute right-0 mt-2 py-2 w-48 bg-white rounded-3xl shadow-xl z-10`}
                >
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    내 정보
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                  >
                    로그아웃
                  </a>
                </div>
              </div>
            ) : (
              <div className="ml-3 flex items-center">
                <a
                  href="/"
                  className="border border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 py-2 px-4 rounded-3xl font-medium"
                >
                  로그인
                </a>
                <a
                  href="/"
                  className="bg-gray-900 text-white py-2 px-4 rounded-3xl ml-3 font-medium"
                >
                  회원가입
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
