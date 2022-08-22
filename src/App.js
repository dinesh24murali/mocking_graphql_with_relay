import React from 'react';

import Incrementer from 'Increment/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Incrementer />
    </div>
  );
}

export default App;
