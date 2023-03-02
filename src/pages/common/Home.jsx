import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { withLayout } from '../../components/common/layout/Layout';
import mainImage from '../../static/images/main.png';

function Home() {
  const isAuthenticated = !!localStorage.getItem('Authorization');
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/main');
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-5">
      <div className="col-span-2 mt-28">
        <h2 className="text-4xl font-bold mb-4">혼자 공부하기 힘드신가요?</h2>
        <h2 className="text-4xl font-bold mb-4">
          그라운드에 참여하고,
          <br />
          목표를 달성해보세요!
        </h2>
        <p className="mb-4">
          challeculum은 온라인 강의 챌린지 플랫폼입니다.
          <br />
          매일 완수해야 하는 미션과 함께 성장하는 자신을 발견하세요.
        </p>
        <a href="/register" className="inline-block py-2 px-4 rounded bg-gray-900 text-white hover:bg-blue-600">가입하러 가기</a>
      </div>
      <div className="col-span-3">
        <img src={mainImage} alt="main" />
      </div>
    </div>

  );
}

export default withLayout(Home);
