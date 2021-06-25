import React from 'react'
import { NavLink } from 'react-router-dom'

import { Row , Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import DashboardContainer from '../components/DashboardContainer'
import Chart from '../assets/images/chart.png'
import PieChart from '../assets/images/pie-chart.png'
import Chart2 from  '../assets/images/chart2.jpg'
import LineChart from '../components/LineChart'

const AdminDashboard = () => {
    
    return (
        <div> 
            <DashboardContainer>
                <div className="c-mar-side-neg-15">
                    <Row>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Clients</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Supports</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Payments</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Pending payments</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Tickets</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Knowledge base</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                    
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Recent Activities</span>
                        </div>
                        <div className="admin-dashboard def-padding">
                            <Row>
                            <Col md={12}>
                                <div className="content-wrapper">
                                    <div className="activity-wrapper">
                                        <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                        </div>                             
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
            </DashboardContainer>
        </div>
    );
}

export default AdminDashboard
