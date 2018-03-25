import React from 'react';
import './App.css';
import Parent from './components/Parent';

let state = {
  name: 'Stella',
  age: 27,
  job: 'Software Developer'
};

const App = () => (
  <div className="App">
    <Parent data={state}/>
  </div>
);

export default App;
