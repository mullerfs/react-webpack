import React from "react";
import ReactDOM from "react-dom";

import MyImage from './assets/unspash.jpg';
import './index.scss';

const App = () => {
  return (
    <div>
        <div>Welcome to my-webpack-react-starter</div>
        <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));