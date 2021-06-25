import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'

const SupportsEditScreen = () => {
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
                                                <label>ID:</label>
                                                <span>01</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Full Name:</label>
                                                <span><input type="text" placeholder="John Smith" /> </span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created:</label>
                                                <span><input type="date" /></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Priority:</label>
                                                <span>
                                                    <select>
                                                        <option>Low</option>
                                                        <option>Meduim</option>
                                                        <option>High</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Payment Plan:</label>
                                                <span>
                                                    <select>
                                                        <option>Gold</option>
                                                        <option>Silver</option>
                                                        <option>Platinum</option>
                                                    </select>
                                                </span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Mobile number:</label>
                                                <span><input type="text" placeholder="+61 7 7010 1111" /></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Email:</label>
                                                <span><input type="text" placeholder="user@gmail.com" /></span>
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
                                                <td><input type="text" placeholder="July" /></td>
                                                <td><input type="text" placeholder="july@mma.com" /></td>
                                                <td><input type="text" placeholder="Sample Dept." /></td>
                                                <td><input type="text" placeholder="+61 7 7010 1111" /></td>
                                                <td><input type="text" placeholder="2/3/2021" /></td>
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
                        <input type="submit" value="Delete" className="update-btn"/>
                    </div>
            </DashboardContainer>
        </div>
    )
}
export default SupportsEditScreen
