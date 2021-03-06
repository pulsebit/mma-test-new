import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Row, Col, Navbar, NavDropdown  } from 'react-bootstrap'
import { logout } from 'store/actions/userActions'

import SiteLogo from '../assets/images/Logo.png'

const Header = () => {
  const dispatch = useDispatch()
  
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
  	 console.log('logout')
  	 dispatch(logout())

  	 if(!userInfo) {

  	 }
  }
 
	return (
		<header>
		 	<Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
				<Container fluid>
					<Row>
					  <Col sm={4} md={3} lg={2}>
						    <LinkContainer exact={true} to='/'>
						       <Navbar.Brand><img className="site-logo" src={SiteLogo} alt='' /></Navbar.Brand>
						    </LinkContainer>
						</Col>
						<Col sm={8} md={9} lg={10} className="response-nav">
						    <Navbar.Toggle aria-controls='basic-navbar-nav' />
						    <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
								<LinkContainer exact={true} to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
								{userInfo ? (	
										<LinkContainer to='/admin'><Nav.Link>Dashboard</Nav.Link></LinkContainer>
								) : (<div></div>) }
								{userInfo ? (
										<NavDropdown title={userInfo.name} id='username'>
											<LinkContainer to='/profile'>
												<NavDropdown.Item>Profile</NavDropdown.Item>
											</LinkContainer>
											<LinkContainer to='/billing-history'>
												<NavDropdown.Item>Billing History</NavDropdown.Item>
											</LinkContainer>
											<LinkContainer to='/admin/users'>
												<NavDropdown.Item>Users</NavDropdown.Item>
											</LinkContainer>
											<NavDropdown.Item onClick={logoutHandler}>
													Logout
											</NavDropdown.Item>
										</NavDropdown>
										) : (
											<LinkContainer to='/login'><Nav.Link>Login</Nav.Link></LinkContainer>
										)} 
								</Navbar.Collapse>
						</Col>	
					</Row>	
				</Container>
			</Navbar>
		</header>
	)
}

export default Header