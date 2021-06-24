import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'


const UserEditScreen = () => {
    return (
        <div className="edit-user-screen">
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
                        <input type="file" className="choose-file"/>
                    </Col>
                    <Col md={10}>
                        <div className="user-details def-padding">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Full Name:</label>
                                        <span> <input type="text" placeholder="John Smith"/></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Mobile number:</label>
                                        <span><input type="text" placeholder="+61 7 7010 1111"/></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Email:</label>
                                        <span><input type="text" placeholder="user@gmail.com"/></span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Address:</label>
                                        <span><input type="text" placeholder="24 Sydney Road, WILPINJONG, New South Wales"/></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Gender:</label>
                                        <span>
                                            <select>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Birthdate:</label>
                                        <span><input type="date" /></span>
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
                                <span>
                                    <select>
                                        <option>Customer</option>
                                        <option>Guest</option>
                                        <option>Others</option>
                                    </select>
                                </span>
                            </div>
                            <div className="details-wrapper">
                                <label>Payment plan:</label>
                                <span>
                                    <select>
                                        <option>Gold</option>
                                        <option>Silver</option>
                                        <option>Platinum</option>
                                    </select>
                                </span>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div className="details-wrapper">
                                <label>Amount due:</label>
                                <span><input type="date" /></span>
                            </div>
                            <div className="details-wrapper">
                                <label>Renewal date:</label>
                                <span><input type="date" /></span>
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
                <input type="submit" value="Delete" className="update-btn"/>
            </div>
                
        </DashboardContainer>
        </div>
    )
}
export default UserEditScreen