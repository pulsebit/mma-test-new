import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import DashboardMemberListScreen from './screens/DashboardMemberListScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <Router>
        <Header />
        <main>
          <Container fluid>
            <Route path='/login' component={LoginScreen} />
            <Route path='/product/:id' component={ProductScreen}  />
            <Route path='/dashboard' component={DashboardMemberListScreen} />
            <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
