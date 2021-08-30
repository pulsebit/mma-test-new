

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ClientLayout from '../../components/ClientLayout'
import User from '../../assets/images/user.png'
import { getSupportDetails } from '../../actions/supportActions'
import date from 'date-and-time'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'

const SupportsViewScreen = ({match}) => {
    const supportId = match.params.id

    const dispatch = useDispatch()

    const { loading, error, support } = useSelector( state => state.supportDetails)
    const { client = {} , created_by = {}, assignee = {} } = support || {}

    console.log(support)

    

    useEffect(() => {
        dispatch(getSupportDetails(supportId))
        
    },[dispatch])

    return (
        <div className="view-screen">
            <ClientLayout>
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
                                                <span>{support.ticket_no}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Full Name:</label>
                                                <span>{client.name}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Mobile number:</label>
                                                <span>{client.mobile_no}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Email:</label>
                                                <span>{client.email}</span>
                                            </div>                                            
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Issue:</label>
                                                <span><textarea value={support.problem_description} readOnly/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Priority:</label>
                                                <span>{support.priority}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Status:</label>
                                                <span>{date.format(new Date(support.createdAt), 'ddd, MMM DD YYYY')}</span>
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
                                            </tr>				
                                            <tr>
                                                <td>{assignee.name}</td>
                                                <td>{assignee.email}</td>
                                                <td>Sample Dept.</td>
                                                <td>{assignee.mobile_no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                    {/* <div className="section-wrapper">
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
                    </div> */}
                        
                    <div className="button-wrapper def-padding">
                        <NavLink to={`/portal/support/${support._id}/edit`} className="edit-btn">Edit</NavLink>
                        <input type="submit" value="Delete" className="delete-btn"/>
                    </div>
            </ClientLayout>
        </div>
    )
}
export default SupportsViewScreen
