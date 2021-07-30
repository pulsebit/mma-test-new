import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import { getSupportDetails } from '../actions/supportActions'

const SupportsViewScreen = ({match}) => {
    const supportId = match.params.id
    console.log(supportId)

    const dispatch = useDispatch()

    const { support } = useSelector( state => state.supportDetails) 

    useEffect(() => {
        dispatch(getSupportDetails(supportId))

    },[dispatch, supportId])

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
                                    <img className="" src={User} alt='' />
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Ticket ID:</label>
                                                <span>{support._id}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Full Name:</label>
                                                <span>{support.name}</span>
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
                                                <span>{support.problem_description}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Priority:</label>
                                                <span>{support.priority}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Status:</label>
                                                <span>{support.status}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created:</label>
                                                <span>{support.createdAt}</span>
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
