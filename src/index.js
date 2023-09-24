import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'; // Import createStore from Redux
import { Provider } from "react-redux";

// Define a reducer function (you should replace this with your actual reducer)
// const rootReducer = (state, action) => {
//   // Your reducer logic here
//   return state;
// };

// Create the Redux store
// const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

const root = document.getElementById('root'); // No need to use ReactDOM.createRoot here
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
