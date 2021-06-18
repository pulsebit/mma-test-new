import React from 'react'
import { NavLink } from 'react-router-dom'
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
                <div className="blue-bkg-title">
                    <span>User Information</span>
                </div>
                <div className="view-user-screen">
                    <Row>
                        <Col md={2}>
                            <div className="img-wrapper">
                                <div className="inner-img-wrapper">
                                    <img className="" src={User} alt='' />
                                </div>
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="user-details">
                            <span className="title">Basic:</span>
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Full Name</label>
                                            <span>John Smith</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Mobile number</label>
                                            <span>+61 7 7010 1111</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Email</label>
                                            <span>user@gmail.com</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Address</label>
                                            <span>24 Sydney Road, WILPINJONG, New South Wales</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Gender</label>
                                            <span>Male</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Birthdate</label>
                                            <span>5 March 1967</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="membership-info">
                                <span className="title">Membership Info:</span>
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Membership type</label>
                                            <span>Customer</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Payment plan</label>
                                            <span>Silver</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="details-wrapper">
                                            <label>Amount due</label>
                                            <span>12 June 2022</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Renewal date</label>
                                            <span>212 June 2022</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="activity-log">
                                <span className="title">Activity-log:</span>
                                <Row>
                                    <Col md={12}>
                                        <table>
                                            <tr>
                                                <th className="date">Date</th>
                                                <th className="notes">Notes</th>
                                                <th className="updated-by">Updated By:</th>
                                                
                                            </tr>				
                                            <tr>
                                                <td className="date">25 March 2021</td>
                                                <td className="notes">Full name has been updated</td>
                                                <td className="updated-by">July</td>
                                            </tr>
                                        </table>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="button-wrapper">
                                <NavLink to="/user-edit" className="edit-btn">Edit Profile</NavLink>
                                <input type="submit" value="Delete" className="delete-btn"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </DashboardContainer>
        </div>
    )
}
export default ViewUserScreen