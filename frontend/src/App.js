import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import AdminDashboard from './screens/AdminDashboard'

import SupportsListScreen from './screens/SupportsListScreen'
import SupportsViewScreen from './screens/SupportsViewScreen'
import SupportsEditScreen from './screens/SupportsEditScreen'

import UserListScreen from './screens/UserListScreen'
import UserViewScreen from './screens/UserViewScreen'
import UserEditScreen from './screens/UserEditScreen'

import PermissionsScreen from './screens/PermissionsScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductViewScreen from './screens/ProductViewScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import ProductCatList from './screens/ProductCatList'

import ProductScreen from './screens/ProductScreen'

import KnowledgeBaseScreen from './screens/KnowledgeBaseScreen'

import PlanListScreen from './screens/PlanListScreen'
import PlanEditScreen from './screens/PlanEditScreen'
import PlanViewScreen from './screens/PlanViewScreen'

import Settings from './screens/Settings'

function App() {
  return (
    <Router>
        <Header />
          <main>
              <Route path='/login' component={LoginScreen} />
              <Route path='/admin' component={AdminDashboard} exact />
              <Route path='/admin/supports' component={SupportsListScreen} exact/>
              <Route path='/admin/supports/:id' component={SupportsViewScreen} />
              <Route path='/admin/supports/edit' component={SupportsEditScreen} />
              <Route path='/admin/users' component={UserListScreen} exact />
              <Route path='/admin/users/:id' component={UserViewScreen}  />
              <Route path='/admin/users/:id/edit' component={UserEditScreen}  />
              <Route path='/admin/permissions' component={PermissionsScreen} />

              <Route path='/admin/productlist/' component={ProductListScreen} />
              <Route path='/admin/product/:id' component={ProductViewScreen}  />
              <Route path='/admin/product/:id/edit' component={ProductEditScreen}  />
              <Route path='/admin/product-categories' component={ProductCatList}  />
              
              <Route path='/product/:id' component={ProductScreen}  />
              <Route path='/admin/knowledge-base' component={KnowledgeBaseScreen} />
              <Route path='/admin/plan' component={PlanListScreen} />
              <Route path='/admin/plan/:id' component={PlanViewScreen} />
              <Route path='/admin/plan/edit' component={PlanEditScreen} />
              <Route path='/admin/settings' component={Settings} />
              <Route path='/' component={HomeScreen} exact />
          </main>
        <Footer />
    </Router>
  );
}

export default App;
