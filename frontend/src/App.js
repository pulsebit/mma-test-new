import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from 'screens/Login'
import Register from 'screens/Register'
import Account from 'screens/Account'
import Admin from 'components/RouterView/Admin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/antd.css';
import './index.css'
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={Register} /> 
        <Route path='/product/:id' component={ProductScreen}  /> 
        <Route path="/account" component={Account}/>
        <Route path="/admin" component={Admin}/>
        <Route path='/' component={HomeScreen} exact />
      </Router>
      <Toast/>
    </>
  );
}

function Toast() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}

export default App;
