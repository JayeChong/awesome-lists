import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './app.jsx';

const render = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider>
      <Component/>
    </MuiThemeProvider>
    ,
    document.body.appendChild(document.createElement('div'))
  );
};

render(App);

// // 模块热替换的 API
// if (module.hot) {
//   module.hot.accept('./app.jsx', () => {
//     render(App)
//   });
// }

/*********************************************************************************************************/

// 让组件的触摸性更好的适应移动设备。
/*
var Main = React.createClass({
  render: function() {
    return (
      <a
        href="#"
        onTouchTap={this.handleTouchTap}
        onClick={this.handleClick}>
        Tap Me
      </a>
    );
  },

  handleClick: function(e) {
    console.log("click", e);
  },

  handleTouchTap: function(e) {
    console.log("touchTap", e);
  }
});

*/