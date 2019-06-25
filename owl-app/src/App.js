import React from 'react';
import './App.css';
import PeopleList from './List.js';
import Stage from './Stage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <PeopleList/>
      </header>
      <div>
        <Stage />
      </div>
    </div>
  );
}

console.log('App.js works')
export default App;
