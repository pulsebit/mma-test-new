import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import date from 'date-and-time'
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import { getKnowledgeBaseDetails } from '../actions/knowlegeBaseAction'




const KnowledgeBaseViewScreen = ({match}) => {
    const knowledgeBastId = match.params.id

    const dispatch = useDispatch()

    const { loading, error, knowledgeBase } = useSelector( state => state.knowledgeBaseDetails)

    useEffect(() => {
        dispatch(getKnowledgeBaseDetails(knowledgeBastId))
        
    },[dispatch, knowledgeBastId])

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
                                <NavLink to={`/admin/knowledge-base-edit/${knowledgeBase._id}/`} className="edit-btn">Edit</NavLink>
                            </div>
                        </div>
                        <div className="user-details def-padding">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Issue:</label>
                                        <textarea value={knowledgeBase.problem_description} readOnly/>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Category:</label>
                                        <span>{knowledgeBase.category}</span>
                                    </div> 
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Solution:</label>
                                       <textarea value={knowledgeBase.solution} readOnly/>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Full Name:</label>
                                        <span>{knowledgeBase._id}</span>
                                    </div> 
                                </Col>
                                <Col md={10}>
                                    <Row>
                                        <Col md={6}>
                                            
                                            <div className="details-wrapper">
                                                <label>Full Name:</label>
                                                <span>{knowledgeBase._id}</span>
                                            </div>                                          
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Mobile number:</label>
                                                <span>{knowledgeBase._id}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Email:</label>
                                                <span>{knowledgeBase._id}</span>
                                            </div>  
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Category:</label>
                                        <span>{knowledgeBase._id}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Priority:</label>
                                        <span>{knowledgeBase._id}</span>
                                    </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Status:</label>
                                        <span>{knowledgeBase._id}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Date Created:</label>
                                        <span>{date.format(new Date(knowledgeBase._id), 'ddd, MMM DD YYYY')}</span>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="details-wrapper">
                                        <label>Issue:</label>
                                        <span><textarea value={knowledgeBase._id} readOnly/></span>
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
                                            <tr key={knowledgeBase._id}>
                                                <td>{knowledgeBase._id}</td>
                                                <td>{knowledgeBase._id}</td>
                                                <td>Sample Dept.</td>
                                                <td>{knowledgeBase._id}</td>
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
                                                <td>{knowledgeBase._id}</td>
                                                <td>{knowledgeBase._id}</td>
                                                <td>Sample Dept.</td>
                                                <td>{knowledgeBase._id}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                </DashboardContainer>
            )}
        </div>
    )
}
export default KnowledgeBaseViewScreen
