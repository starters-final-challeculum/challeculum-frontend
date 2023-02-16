import React from 'react';
import Cookies from 'js-cookie';
import WithoutTokenRouter from './router/WithoutTokenRouter';
import WithTokenRouter from './router/WithTokenRouter';

function App() {
  const token = Cookies.get('Authorization');
  return (
    <div className="App">
      { token ? <WithTokenRouter /> : <WithoutTokenRouter />}
    </div>
  );
}

export default App;
