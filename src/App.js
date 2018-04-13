import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const fullnames = {
      ryoma: '坂本龍馬',
      taka: '西郷隆盛',
      kai: '勝海舟'
    };
    const getFullname = nickname => fullnames[nickname];
    const element = <h2>Hello, {getFullname('ryoma')}</h2>
    const list = (
      <ul>
        {[1,2,3].map(num => <li>{num}</li>)}
      </ul>
    )
    
    const heading = React.createElement(
      "h3",
      null,
      "h3 text"
    );
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        { heading }
    
        { element }
        { list }
      </div>
    );
  }
}

export default App;