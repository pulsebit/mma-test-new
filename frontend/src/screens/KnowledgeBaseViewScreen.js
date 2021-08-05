import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import { getSupportDetails } from '../actions/supportActions'
import date from 'date-and-time'
import Message from '../components/Message'
//import Loader from '../components/Loader'
import Loader2 from '../components/Loader2'
import AddNote from '../components/AddNote'




const KnowledgeBaseViewScreen = ({match}) => {
    const supportId = match.params.id

    const dispatch = useDispatch()

    const { loading, error, support } = useSelector( state => state.supportDetails)
    const { client = {} , created_by = {}, assignee = {} } = support || {}

    useEffect(() => {
        dispatch(getSupportDetails(supportId))
        
    },[dispatch, supportId])

    return (
        <div className="view-screen">
            { loading ? (
                	<Loader2/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Support Information</span>
                            <div className="button-wrapper">
                                <NavLink to={`/admin/knowledge-base-edit/${support._id}/`} className="edit-btn">Edit</NavLink>
                            </div>
                        </div>
                        <div className="user-details def-padding">
                            <Row>
                                <Col md={2}>
                                    <div className="img-wrapper">
                                        <img className="" src={User} alt='' />
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Ticket Number:</label>
                                                <span>{support.ticket_no}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Full Name:</label>
                                                <span>{client.name}</span>
                                            </div>                                          
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Mobile number:</label>
                                                <span>{client.mobile_no}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Email:</label>
                                                <span>{client.email}</span>
                                            </div>  
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Category:</label>
                                        <span>{support.category}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Priority:</label>
                                        <span>{support.priority}</span>
                                    </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Status:</label>
                                        <span>{support.status}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Date Created:</label>
                                        <span>{date.format(new Date(support.createdAt), 'ddd, MMM DD YYYY')}</span>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="details-wrapper">
                                        <label>Issue:</label>
                                        <span><textarea value={support.problem_description} readOnly/></span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Assignee</span>
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
                                            <tr key={assignee._id}>
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

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Created by: </span>
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
                                                <td>{created_by.name}</td>
                                                <td>{created_by.email}</td>
                                                <td>Sample Dept.</td>
                                                <td>{created_by.mobile_no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                    <AddNote 
                        supportInfo={supportId} 
                        clientInfo={client._id}
                        assigneeInfo={assignee._id}
                    />
                </DashboardContainer>
            )}
        </div>
    )
}
export default KnowledgeBaseViewScreen
