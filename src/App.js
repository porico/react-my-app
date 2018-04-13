import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

// [Functional Component]
const Hello = (props) => {
  return <div>Hello {props.name} !</div>;
}

// [Class Component]
// - React.Componentを明示的に継承し、propsはthis.propsで受けとる
// - stateがある
// - ライフサイクルメソッドを定義することができる
class App extends Component {
  render() {
    //return <div>Hello {this.props.name} !!</div>;
    return(
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Hello World!</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

        <ul>
          <li>no: {this.props.no}</li>
          <li>name: {this.props.name}</li>
          <li>birth day: {this.props.birthDay}</li>
        </ul>
    )
  }
}



// [型情報の追加]
// PropTypesは、インポートしたprop-typesモジュールが持つオブジェクトで方情報を持っている
// propTypesは、自作したReactコンポーネントが持つプロパティ名で、各propsの型情報を記述する
Hello.propTypes = {
  name: PropTypes.string
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
  hogeBool: PropTypes.bool,
  hogeArray: PropTypes.array,
  hogeObject: PropTypes.object,
  hogeFunc: PropTypes.func,
  hogeSymbol: PropTypes.symbol
  // element, node, instanceOf, oneOf, oneOfType, etc..
};


export default App;