import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from "./Redux/Store";   

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Store is: ", store);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>   {/*  wrap app with store */}
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
