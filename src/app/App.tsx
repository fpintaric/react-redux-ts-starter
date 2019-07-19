import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello';
import configureStore from './store/store';
import { Provider } from 'react-redux';
declare const module: any;

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
