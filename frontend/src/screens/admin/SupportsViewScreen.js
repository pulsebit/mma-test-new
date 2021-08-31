import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../../components/DashboardContainer'
import User from '../../assets/images/user.png'
import { getSupportDetails } from '../../actions/supportActions'
import date from 'date-and-time'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import AddNote from '../../components/AddNote'
import { createKnowledgeBase } from '../../actions/knowlegeBaseAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPaperPlane } from '@fortawesome/free-solid-svg-icons'




const SupportsViewScreen = ({match}) => {
    const supportId = match.params.id

    const dispatch = useDispatch()

    const { loading, error, support } = useSelector( state => state.supportDetails)
    const { client = {} , created_by = {}, assignee = {} } = support || {}
    
    useEffect(() => {
        dispatch(getSupportDetails(supportId))
        
    },[dispatch, supportId])

    const addToKnowledgeBase = (e) => {
        e.preventDefault()
        dispatch(createKnowledgeBase(support.problem_description, support.solution, support.category, assignee._id))
    }

    return (
        <div className="view-screen">
            { loading ? (
                	<Loader2/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="dashboard-title-wrapper">
                            <div className="dashboard-title">Support Information</div>
                            <div className="button-wrapper">
                                <NavLink to={`/admin/supports-edit/${support._id}/`} className="edit-btn"><FontAwesomeIcon icon={faEdit}/>Edit</NavLink>
                                { support.status === 'Completed' ? (
                                    <>
                                        <button onClick={addToKnowledgeBase}className='update-btn'><FontAwesomeIcon icon={faPaperPlane}/>Knowledge Base</button>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className="user-details def-padding">
                            <Row>
                                {/* <Col md={2}>
                                    <div className="img-wrapper">
                                        <img className="" src={User} alt='' />
                                    </div>
                                </Col> */}
                                <Col md={12}>
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
                                        <textarea value={support.problem_description} readOnly/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    
                    
                    <Row>
                        <Col md={6}>
                            <div className="dashboard-title-alone">Assignee</div>
                            <div className="section-wrapper mar-b-50">
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                            </tr>				
                                            <tr>
                                                <td>{assignee.name}</td>
                                                <td>{assignee.email}</td>
                                                <td>{assignee.mobile_no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> 
                        </Col>
                        <Col md={6}>
                            <div className="dashboard-title-alone">Created by</div>
                            <div className="section-wrapper mar-b-50">
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                            </tr>				
                                            <tr>
                                                <td>{created_by.name}</td>
                                                <td>{created_by.email}</td>
                                                <td>{created_by.mobile_no}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    

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
export default SupportsViewScreen
