import React from 'react';
import { FaGoogle } from 'react-icons/fa';

export function NaverLoginButton() {
  return (
    <button
      className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
    >
      <FaGoogle className="w-6 h-6 mr-4" />
      <span>네이버 아이디로 로그인</span>
    </button>
  );
}
