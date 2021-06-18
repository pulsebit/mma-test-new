import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import AdminDashboard from './screens/AdminDashboard'
import SupportsScreen from './screens/SupportsScreen'
import UserListScreen from './screens/UserListScreen'
import ViewUserScreen from './screens/ViewUserScreen'
import EditUserScreen from './screens/EditUserScreen'
import PermissionsScreen from './screens/PermissionsScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductScreen from './screens/ProductScreen'
import CategoriesScreen from './screens/CategoriesScreen'
import PlanListScreen from './screens/PlanListScreen'
import Settings from './screens/Settings'

function App() {
  return (
    <Router>
        <Header />
          <main>
              <Route path='/login' component={LoginScreen} />
              <Route path='/dashboard' component={AdminDashboard} exact/>
              <Route path='/dashboard/supports' component={SupportsScreen} />
              <Route path='/dashboard/users' component={UserListScreen} />
              <Route path='/dashboard/permissions' component={PermissionsScreen} />
              <Route path='/dashboard/product' component={ProductListScreen} />
              <Route path='/product/:id' component={ProductScreen}  />
              <Route path='/dashboard/categories' component={CategoriesScreen} />
              <Route path='/dashboard/plan' component={PlanListScreen} />
              <Route path='/dashboard/settings' component={Settings} />
              <Route path='/user-view' component={ViewUserScreen} />
              <Route path='/user-edit' component={EditUserScreen} />
              <Route path='/' component={HomeScreen} exact />
          </main>
        <Footer />
    </Router>
  );
}

export default App;
