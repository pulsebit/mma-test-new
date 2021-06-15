import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faConciergeBell, faUserAlt, faHistory, faBrain, faLink } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Container } from 'react-bootstrap'

import '../styles/dashboard.css'

const DashboardContainer = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Container fluid>
                <Row className='dashboard'>
                    <Col xs={12} md={2}>
                        <div className="sidebar">
                        

                            <ul>
                                <li><FontAwesomeIcon icon={faHome} /><NavLink to='/profile'>Dashboard</NavLink></li>
                                <li><FontAwesomeIcon icon={faConciergeBell} /><NavLink to='/profile'>Services</NavLink></li>
                                <li><FontAwesomeIcon icon={faUserAlt} /><NavLink to='/profile'>Profile</NavLink></li>
                                <li><FontAwesomeIcon icon={faHistory} /><NavLink to='/profile'>Payment History</NavLink></li>
                                <li><FontAwesomeIcon icon={faBrain} /><NavLink to='/profile'>Knowledge Base</NavLink></li>
                                <li><FontAwesomeIcon icon={faLink} /><NavLink to='/profile'>Link</NavLink></li>
                                <li><FontAwesomeIcon icon={faLink} /><NavLink to='/profile'>Link</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={10}>
                    <div class="main-content">
                        <div class="member-list-wrapper column-shadow">
                            <div class="blue-bkg-title">
                                <span>Member List</span>
                                <div class="dash-option">
                                    
                                </div>
                            </div>
                            <div className="main-data">
                                {children}
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardContainer
