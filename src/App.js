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
  hogeSymbol: PropTypes.symbol,
  // 以下は型情報を作成するための関数の例
  fugaArray: PropTypes.arrayOf(PropTypes.number),
  fugaObject: PropTypes.objectOf(PropTypes.number),
  // 以下は文字列のnameと数値のageを持つオブジェクトを定義する例
  complexObject: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),
  // 以下はReactエレメントであることを指定
  hogeElement:PropTypes.element,
  // 以下のnodeは子要素のうちstring, number, element, arrayを指定できる
  hogeNode: PropTypes.node,
  // 以下はHelloコンポーネントのインスタンスを指定
  helloElement: PropTypes.instanceOf(Hello),
  // 以下は指定した配列のいずれかであることを指定
  dayOfTheWeek: PropTypes.oneOf(['月','火','水','木','金','土','日']),
  // 以下は配列で指定した型のいずれかであることを指定
  union: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Hello),
  ]),
  // 以下はどんな型でもよいことを指定PropTypesを指定する意味がなくなるので通常は使わない
  any: PropTypes.any,
};



export default App;