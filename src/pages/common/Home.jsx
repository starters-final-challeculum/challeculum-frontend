import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withLayout } from '../../components/common/layout/Layout';

function Home() {
  const isAuthenticated = !!localStorage.getItem('Authorization');
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, []);
  return (
  // <div className="container mx-auto max-w-screen-xl">
  //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  //     <div className="bg-gray-200 p-4">
  //       <h1>Introduce Page</h1>
  //     </div>
  //     <div className="bg-gray-200 p-4">
  //       <a href="/main">메인페이지 가기</a>
  //     </div>
  //     <div className="bg-gray-200 p-4"><a href="/main">로그인</a></div>
  //     <div className="bg-gray-200 p-4"><a href="/main">회원가입</a></div>
  //     <div className="bg-gray-200 p-4">Column 5</div>
  //     <div className="bg-gray-200 p-4">Column 6</div>
  //   </div>
  // </div>
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to my website</h2>
      <p className="mb-4">
        hello
      </p>
      <a href="/" className="inline-block py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-600">Learn More</a>
    </div>
  );
}

export default withLayout(Home);
