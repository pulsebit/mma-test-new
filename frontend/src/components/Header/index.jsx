import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Row, Col, Navbar, NavDropdown  } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import SiteLogo from 'assets/images/Logo.png'
import * as H from './styled'
import { authLogout } from 'store/actions/authActions';
import { auth } from 'helpers/auth';

console.log(auth.id_token)

const Header = () => {

	return (
		<H.Header>
		 	<Navbar expand='lg' collapseOnSelect>
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
							{auth.isAuthenticated ? (	
								<LinkContainer to='/admin'>
									<Nav.Link>Dashboard</Nav.Link>
								</LinkContainer>
							) : <div></div> }
							{auth.isAuthenticated ? (
								<UserNav />
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>Login</Nav.Link>
								</LinkContainer>
							)} 
							</Navbar.Collapse>
						</Col>	
					</Row>	
				</Container>
			</Navbar>
		</H.Header>
	)
}

export default Header


function UserNav() {
	const history = useHistory();

	const logoutHandler = React.useCallback(() => {
		setTimeout(() => {
			authLogout();
			history.push('/login');
		}, 500);
	}, [history]);

	return (
		<NavDropdown title={auth.profile && auth.profile.name} id='username'>
			<LinkContainer to='/profile'>
				<NavDropdown.Item>Profile</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/profile'>
				<NavDropdown.Item>Billing History</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/profile'>
				<NavDropdown.Item>Users</NavDropdown.Item>
			</LinkContainer>
			<NavDropdown.Item onClick={logoutHandler}>
					Logout
			</NavDropdown.Item>
		</NavDropdown>
	)
}