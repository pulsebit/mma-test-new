import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import '../styles/dashboard.css'


const ViewUserScreen = () => {
    return (
        <div>
            <DashboardContainer>
                <div className="view-user-screen">
                    <Row>
                        <Col md={3}>
                            <div className="img-wrapper">
                                <div className="inner-img-wrapper">
                                    <img className="" src={User} alt='' />
                                </div>
                                <input type="file" Value="Edit Image" className="choose-file"/>
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className="user-details">
                                <Row>
                                    <Col md={6}>
                                        <div className='details-wrapper'>
                                            <label>First Name:</label>
                                            <input type="text" />
                                            <label>Last Name:</label>
                                            <input type="text" />
                                            <label>Email:</label>
                                            <input type="text" />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className='details-wrapper'>
                                            <label>Membership:</label>
                                                <div class="membership-select" >
                                                    <select>
                                                        <option value="Trainee">Trainee</option>
                                                        <option value="Competitor">Competitor</option>
                                                        <option value="Spartan">Spartan</option>
                                                    </select>
                                                </div>
                                            <label>Status:</label>
                                                <div class="status-select" >
                                                    <select>
                                                        <option value="Active">Active</option>
                                                        <option value="Inactive">Inactive</option>
                                                    </select>
                                                </div>
                                            <label>Sign up Date:</label>
                                            <input type="date" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={12}>
                            <input type="Submit" value="Update" className="update-btn"/>
                        </Col>
                    </Row>
                </div>
            </DashboardContainer>
        </div>
    )
}
export default ViewUserScreen