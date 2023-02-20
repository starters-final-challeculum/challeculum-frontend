import React from 'react';
import { FaGoogle } from 'react-icons/fa';

export function GoogleLoginButton() {
  return (
    <button
      className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
    >
      <FaGoogle className="w-6 h-6 mr-4" />
      <span>Sign in with Google</span>
    </button>
  );
}
