import React, { Component } from 'react';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Class component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
      <div className="App">
    
       <Route path="/" >
<h>fdcvgbhnm</h>
       </Route>
      </div>
      </Router>
    );
  }
}

/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default App;
*/
