import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

import VisibleTodoList from './containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <VisibleTodoList />
        </div>
      
    );
  }
}

export default App;
