import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'


const UserViewScreen = () => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Basic Information</span>
                    </div>
                    <Row>
                        <Col md={2}>
                            <div className="img-wrapper">
                                <div className="inner-img-wrapper ">
                                    <img className="" src={User} alt='' />
                                </div>
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="user-details def-padding">
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Full Name:</label>
                                            <span>John Smith</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Mobile number:</label>
                                            <span>+61 7 7010 1111</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Email:</label>
                                            <span>user@gmail.com</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Address:</label>
                                            <span>24 Sydney Road, WILPINJONG, New South Wales</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Gender:</label>
                                            <span>Male</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Birthdate:</label>
                                            <span>5 March 1967</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="section-wrapper ">
                    <div className="blue-bkg-title def-padding">
                        <span>Membership Info</span>
                    </div>
                    <div className="user-details def-padding">
                        <Row>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Membership type:</label>
                                    <span>Customer</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Payment plan:</label>
                                    <span>Silver</span>
                                </div>
                            </Col>
                            <Col md={6}>
                            <div className="details-wrapper">
                                    <label>Amount due:</label>
                                    <span>12 June 2022</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Renewal date:</label>
                                    <span>212 June 2022</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Activity-log</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
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
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="button-wrapper def-padding">
                    <NavLink to="/admin/users/:id/edit" className="edit-btn">Edit Profile</NavLink>
                    <input type="submit" value="Delete" className="delete-btn"/>
                </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default UserViewScreen