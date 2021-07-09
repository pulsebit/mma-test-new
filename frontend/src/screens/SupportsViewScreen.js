import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'

const SupportsViewScreen = () => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Support Information</span>
                        </div>
                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <div className="inner-img-wrapper">
                                        <img className="" src={User} alt='' />
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Ticket ID:</label>
                                                <span>01</span>
                                            </div>
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
                                                <label>Issue:</label>
                                                <span>Plan Issue</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Priority:</label>
                                                <span>Low</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Status:</label>
                                                <span>Open</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created:</label>
                                                <span>12/12/2021</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Assigned</span>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Department</th>
                                                <th>Mobile Number</th>
                                                <th>Date Assigned</th>
                                            </tr>				
                                            <tr>
                                                <td>July</td>
                                                <td>july@mma.com</td>
                                                <td>Sample Dept.</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Notes</span>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Id</th>
                                                <th>Added by</th>
                                                <th>Notes</th>
                                                <th>date</th>
                                                
                                            </tr>				
                                            <tr>
                                                <td>2</td>
                                                <td>July</td>
                                                <td>Already sent email to client.</td>
                                                <td>2/3/2021</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                        
                    <div className="button-wrapper def-padding">
                        <NavLink to="/admin/supports/:id/edit" className="edit-btn">Edit</NavLink>
                        <input type="submit" value="Delete" className="delete-btn"/>
                    </div>
            </DashboardContainer>
        </div>
    )
}
export default SupportsViewScreen
