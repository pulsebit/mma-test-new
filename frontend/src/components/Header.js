import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Row, Col, Navbar, NavDropdown  } from 'react-bootstrap'
import { logout } from '../actions/userActions'

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
		 <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Row>
					  <Col sm={4} md={3} lg={2}>
						    <LinkContainer to='/'>
						       <Navbar.Brand>Logo</Navbar.Brand>
						    </LinkContainer>
						</Col>
						<Col sm={8} md={9} lg={10}>
						    <Navbar.Toggle aria-controls='basic-navbar-nav' />
						    <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
										<LinkContainer to='/cart'><Nav.Link>Home</Nav.Link></LinkContainer>
										{userInfo ? (
											    <NavDropdown title={userInfo.name} id='username'>
	                           <LinkContainer to='/profile'>
	                              <NavDropdown.Item>Profile</NavDropdown.Item>
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