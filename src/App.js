import React, {Component} from 'react';
import './App.css';
import Parent from './components/Parent';

class App extends Component {
  state = {
    name: 'Stella',
    age: 27,
    job: 'Software Developer'
  }
  render() {
    return (
      <div className="App">
        <Parent data={this.state}/>
      </div>
    );
  }
}

export default App;
