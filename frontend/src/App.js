import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import AdminDashboard from './screens/AdminDashboard'

import SupportsListScreen from './screens/SupportsListScreen'
import SupportsViewScreen from './screens/SupportsViewScreen'
import SupportsEditScreen from './screens/SupportsEditScreen'

import Users from 'screens/Users'

import PermissionsScreen from './screens/PermissionsScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductViewScreen from './screens/ProductViewScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductCatList from './screens/ProductCatList'
import ProductCatViewScreen from './screens/ProductCatViewScreen'

import ProductScreen from './screens/ProductScreen'

import KnowledgeBaseScreen from './screens/KnowledgeBaseScreen'

import PlanListScreen from './screens/PlanListScreen'
import PlanEditScreen from './screens/PlanEditScreen'
import PlanViewScreen from './screens/PlanViewScreen'

import Settings from './screens/Settings'
import LoginScreen from 'screens/Login'
import Register from 'screens/Register'

import Account from 'screens/Account'
import Product from 'screens/Product'

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
        <Route path='/admin/dashboard' component={AdminDashboard} exact />
        <Route path='/admin/supports' component={SupportsListScreen} exact/>
        <Route path='/admin/supports/:id' component={SupportsViewScreen} exact/>
        <Route path='/admin/supports/:id/edit' component={SupportsEditScreen} />

        <Route path='/admin/users' component={Users} />
        {/* <Route path='/admin/users/:id/edit' component={UserEditScreen}  /> */}
        {/* <Route path='/admin/users-view/:id' component={UserViewScreen} /> */}
        
        <Route path='/admin/permissions' component={PermissionsScreen} />

        <Route path="/admin/products" component={Product} />
        
        {/* <Route path='/admin/productlist/' component={ProductListScreen} />
        <Route path='/admin/product/:id' component={ProductViewScreen}  />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen}  />
        <Route path='/admin/product-categories' component={ProductCatList} exact />
        <Route path='/admin/product-categories/view' component={ProductCatViewScreen}  /> */}
        
        <Route path='/product/:id' component={ProductScreen}  />
        <Route path='/admin/knowledge-base' component={KnowledgeBaseScreen} />
        <Route path='/admin/plan' component={PlanListScreen} />
        <Route path='/admin/plan/:id' component={PlanViewScreen} />
        <Route path='/admin/plan/edit' component={PlanEditScreen} />
        <Route path='/admin/settings' component={Settings} />
        
        <Route path="/account" component={Account}/>
        <Route path='/' component={HomeScreen} exact />
      </Router>
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
    </>
  );
}

export default App;
