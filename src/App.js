import React from 'react';
import Cookies from 'js-cookie';
import WithTokenRouter from './pages/with-token/WithTokenRouter';
import WithoutTokenRouter from './pages/without-token/WithoutTokenRouter';

function App() {
  const token = Cookies.get('Authorization');
  return (
    <div className="App">
      { token ? <WithTokenRouter /> : <WithoutTokenRouter />}
    </div>
  );
}

export default App;
