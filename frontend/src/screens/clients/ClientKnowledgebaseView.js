import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ClientLayout from '../../components/ClientLayout'
import date from 'date-and-time'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import { getKnowledgeBaseDetails } from '../../actions/knowlegeBaseAction'




const ClientKnowledgebaseView = ({match}) => {
    const knowledgeBastId = match.params.id

    const dispatch = useDispatch()

    const { loading, error, knowledgeBase } = useSelector( state => state.knowledgeBaseDetails)
    const { created_by = {},  } = knowledgeBase || {}

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
                <ClientLayout>
                    <div className="section-wrapper mar-b-50">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Knowledge Base</div>
                    </div>
                        <div className="user-details def-padding">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Category:</label>
                                        <span>{knowledgeBase.category}</span>
                                    </div> 
                                    <div className="details-wrapper">
                                        <label>Issue:</label>
                                        <textarea value={knowledgeBase.problem_description} readOnly/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Solution:</label>
                                       <textarea value={knowledgeBase.solution} readOnly/>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Date Created:</label>
                                        <span>{date.format(new Date(knowledgeBase.createdAt), 'ddd, MMM DD YYYY')}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="section-wrapper">
                        <div className="dashboard-title-wrapper">
                            <div className="dashboard-title">Created by</div>
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
                                            <tr key={created_by._id}>
                                                <td>{created_by.name}</td>
                                                <td>{created_by.email}</td>
                                                <td>Sample Dept.</td>
                                                <td>{created_by._id}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                </ClientLayout>
            )}
        </div>
    )
}
export default ClientKnowledgebaseView
