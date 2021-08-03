import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { NavDropdown  } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import * as H from './dashboardHeaderStyle'
import { authLogout } from 'store/actions/authActions';
import useAuth from 'hooks/useAuth';
import Profile from 'assets/images/user.svg';

const DashboardHeader = () => {
	return (
		<H.Header>
      <div className="left">
        <H.SidebarTogger>
          <span></span><span></span><span></span>
        </H.SidebarTogger>
      </div>
      <div className="center"></div>
      <div className="right">
        <UserNav/>
      </div>
		</H.Header>
	)
}

export default DashboardHeader;


function UserNav() {
	const history = useHistory();
  const { user } = useAuth();
  
	const logoutHandler = React.useCallback(() => {
    authLogout();
		setTimeout(() => {
			history.push('/login');
		}, 500);
	}, [history]);

	return (
		<NavDropdown 
      className="nav-profile" 
      id='username'
      title={user && <img src={user.picture || Profile} alt={user.name || 'No name'} />}
    >
			<LinkContainer to='/account/profile'>
				<NavDropdown.Item>Profile</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/profile-2'>
				<NavDropdown.Item>Billing History</NavDropdown.Item>
			</LinkContainer>
			<LinkContainer to='/profile3'>
				<NavDropdown.Item>Users</NavDropdown.Item>
			</LinkContainer>
      <button className="dropdown-item" onClick={logoutHandler}>
        Logout
      </button>
		</NavDropdown>
	)
}