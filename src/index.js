import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
//import Greeting from './App';
import registerServiceWorker from './registerServiceWorker';

const profile = [
  {
    no: 1,
    name: 'Yamada',
    birthDay: '1900/10/4'
  },{
    no: 2,
    name: 'Tanaka',
    birthDay: '2000/2/3'
  },{
    no: 3,
    //name: 'Tanaka',
    //birthDay: '1800/2/2'
  }
];
//
App.defaultProps = {
  name: '(no name)',
  birthDay: '(no data)'
}

// props.children
// React コンポーネントの子要素がchildrenとして渡される
const Hello2 = (props) => {
  return <div>Hello {props.children} !</div>;
}
// Hello2.propTypes = {
//   name: PropTypes.string
// };

const Greeting = (props) => {
  return (
    <div>
      <h2>ご挨拶</h2>
      {props.children}
    </div>
  );
}

ReactDOM.render(
  <React.Fragment>

    <p>Reactコンポーネントは単一の親からなる要素しか表現できない。ので要素を並列で作成する場合は、Fragmentコンポーネントを利用する。</p>
<code>
&lt;React.Fragment&gt;&lt;/React.Fragment&gt;
<br/>
    または、簡略記法（新しい）
<br/>
&lt;&gt;&lt;/&gt;
</code>
    
    <p>以下はすべてReactエレメント</p>

    
    <p>ex) props.children</p>
    <Greeting>
      <Hello2>坂本龍馬</Hello2>
      <Hello2>西郷隆盛</Hello2>
      <Hello2></Hello2>
    </Greeting>
   

    <App {...profile[0]} /> {/*「...」はオブジェクトの中身を展開して渡す */}
    <App {...profile[1]} />
    <App {...profile[2]} />
    <App no={3} name="Yukiko" birthDay="1975/7/14" />
    <App no={4} name="Tomoko" birthDay="1978/1/1" />
  </React.Fragment>, 
  document.getElementById('root')
);
registerServiceWorker();
