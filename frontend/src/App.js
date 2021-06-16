import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import DashboardMemberListScreen from './screens/DashboardMemberListScreen'
import ViewUserScreen from './screens/ViewUserScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
        <Header />
        <main>
            <Route path='/login' component={LoginScreen} />
            <Route path='/product/:id' component={ProductScreen}  />
            <Route path='/dashboard' component={DashboardMemberListScreen} />
            <Route path='/user-edit' component={ViewUserScreen} />
            <Route path='/' component={HomeScreen} exact />
        </main>
        <Footer />
    </Router>
  );
}

export default App;
