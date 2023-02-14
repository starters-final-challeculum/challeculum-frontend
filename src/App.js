import React from 'react';
import WithTokenRouter from './pages/with-token/WithTokenRouter';
import WithoutTokenRouter from './pages/without-token/WithoutTokenRouter';

function App() {
  const token = localStorage.getItem('jwtToken');
  return (
    <div className="App">
      { token ? <WithTokenRouter /> : <WithoutTokenRouter />}
    </div>
  );
}

export default App;
