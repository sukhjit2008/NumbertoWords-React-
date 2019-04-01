import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter,Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <div className="App">
      <h1 className="primary-heading">Enter two integers between 1 and 999</h1>
      <Route path='/' exact component={Dashboard}/>
      
      </div>
      </BrowserRouter>
     
    );
  }
}

export default App;
