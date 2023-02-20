import React from 'react';
import { FaGoogle } from 'react-icons/fa';

export function GoogleLoginButton() {
  const handleClick = () => {
    window.location.href = 'http://localhost:8090/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect';
  };

  return (
    <button
      className="mt-8 bg-sky-400 text-white font-semibold py-2 px-4 border border-gray-400 rounded-2xl shadow flex items-center justify-center w-full border-0"
      onClick={handleClick}
    >
      <FaGoogle className="w-6 h-6 mr-4" />
      <span>Sign in with Google</span>
    </button>
  );
}
