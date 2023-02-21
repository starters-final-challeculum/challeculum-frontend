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
