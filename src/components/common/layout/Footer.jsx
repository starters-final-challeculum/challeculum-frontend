import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-600">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              © 2023 by Companion PJJJW. Proudly created with Tailwind CSS.
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="/"
              className="text-black hover:text-white px-3 py-2 text-sm"
            >
              이용 약관
            </a>
            <a
              href="/"
              className="text-black hover:text-white px-3 py-2 text-sm"
            >
              개인정보 처리방침
            </a>
            <a
              href="/"
              className="text-black hover:text-white px-3 py-2 text-sm"
            >
              쿠키 정책
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
