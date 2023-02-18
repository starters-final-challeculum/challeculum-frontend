import React from 'react';
import WithoutTokenRouter from './router/WithoutTokenRouter';
import WithTokenRouter from './router/WithTokenRouter';

function App() {
  const token = localStorage.getItem('Authorization');
  return (
    <div className="App">
      { token ? <WithTokenRouter /> : <WithoutTokenRouter />}
    </div>
  );
}

export default App;
