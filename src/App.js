import React from 'react';
import './App.css';

const myContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    name: 'Stella',
    age: 27,
    job: 'Software Developer'
  };
  render() {
    return (
      <myContext.Provider value={"My Value"}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}

const SecondChild = () => (
  <myContext.Consumer>
    {
      content => <div>from the second child, here is the {content}</div>
    }
  </myContext.Consumer>
);

const FirstChild = () => (
  <SecondChild />
);

const App = () => (
  <MyProvider>
    <div className="App">
      <FirstChild />
    </div>
  </MyProvider>
);

export default App;
