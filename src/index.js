import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './App';

import './assets/main.css';
import css from './config/style.json'

document.querySelector('body').style.backgroundColor = css.style.mainBg
const target = document.querySelector('#root');

const doRender = () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    target
  );
}

doRender()

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log('hot reload....')
    doRender()
  })
}


