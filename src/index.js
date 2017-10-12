import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './reducers/tasks';
import AppRouter from './routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import './styles/app.css';

var store = createStore(taskReducer);

ReactDOM.render(
  <Provider
    store={store}
  >
    <AppRouter />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

export default store;