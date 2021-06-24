import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAlt, faTicketAlt, faKey, faBoxes, faListAlt, faCalendarAlt, faCogs } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap'

import '../styles/dashboard.css'

const AdminDashboard = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Container fluid>
            <Row className='dashboard'>
                <Col xs={12} md={2} className="sidebar">
                    <ul>
                        <li><NavLink exact={true} to='/dashboard'><FontAwesomeIcon icon={faHome} /><span>Dashboard</span></NavLink></li>
                        <li><NavLink to='/dashboard/users'><FontAwesomeIcon icon={faUserAlt} /><span>Users</span></NavLink></li>
                        <li><NavLink to='/dashboard/supports'><FontAwesomeIcon icon={faTicketAlt} /><span>Supports</span></NavLink></li>
                        <li><NavLink to='/dashboard/permissions'><FontAwesomeIcon icon={faKey} /><span>Permissions</span></NavLink></li>
                        <li><NavLink to='/dashboard/product'><FontAwesomeIcon icon={faBoxes} /><span>Products</span></NavLink></li>
                        <li><NavLink to='/dashboard/categories'><FontAwesomeIcon icon={faListAlt} /><span>Categories</span></NavLink></li>
                        <li><NavLink to='/dashboard/plan'><FontAwesomeIcon icon={faCalendarAlt} /><span>Payment plans</span></NavLink></li>
                        <li><NavLink to='/dashboard/settings'><FontAwesomeIcon icon={faCogs} /><span>Settings</span></NavLink></li>
                    </ul>
                </Col>
                <Col xs={12} md={10} className="main-content">
                    
                    <div className="member-list-wrapper">
                        <div className="main-data">
                            {children}
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default AdminDashboard
