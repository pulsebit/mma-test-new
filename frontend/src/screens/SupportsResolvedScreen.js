import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import { getSupportDetails } from '../actions/supportActions'
import date from 'date-and-time'
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import AddNote from '../components/AddNote'




const SupportsResolvedScreen = ({match}) => {
    const supportId = match.params.id

    const dispatch = useDispatch()

    const [resolvedDescription, setResolvedDescription] = useState('')

    const { loading, error, support } = useSelector( state => state.supportDetails)
    const { client = {} , created_by = {}, assignee = {} } = support || {}

    {date.format(new Date(support.createdAt), 'ddd, MMM DD YYYY')}

    

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
                                    <div className="details-wrapper">
                                        <label>Assignee:</label>
                                        <span>{assignee.name}</span>
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
                                    <div className="details-wrapper">
                                        <label>Created by:</label>
                                        <span>{created_by.name}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="section-wrapper">
                        <Row>
                            <Col md={6}>
                                <div className="blue-bkg-title def-padding">
                                    <span>Issue</span>
                                </div>
                                <div className="view-screen">
                                    <div className="user-details">
                                        <div className="details-wrapper">
                                            <textarea value={support.problem_description} readOnly/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="blue-bkg-title def-padding">
                                    <span>Solution</span>
                                </div>
                                <div className="edit-screen">
                                    <div className="user-details">
                                        <div className="details-wrapper">
                                            <textarea value={resolvedDescription} onChange={(e)=>setResolvedDescription(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="button-wrapper def-padding">
                            <button type="submit" value="Update" className='update-btn'>Submit</button>
                    </div>
                </DashboardContainer>
            )}
        </div>
    )
}
export default SupportsResolvedScreen
