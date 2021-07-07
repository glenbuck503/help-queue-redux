import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducer from './reducers/ticket-list-reducer';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
