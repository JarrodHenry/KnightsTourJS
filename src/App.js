import React, { Component } from 'react';
import Chessboard from './Components/Chessboard'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Knight's Tour</h2>
        </div>


            <Chessboard />



      </div>
    );
  }

}

export default App;
