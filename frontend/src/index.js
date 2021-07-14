import React from 'react'
import './bootstrap.min.css'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { onAuthStateChanged } from 'helpers/auth'
import { authChanges } from 'store/actions/authActions'

store.subscribe(() => console.log(store.getState()))

onAuthStateChanged((auth) => {
  authChanges({ userId: auth?.profile._id, ...auth });
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
