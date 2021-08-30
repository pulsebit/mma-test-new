import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../../components/DashboardContainer'
import date from 'date-and-time'
<<<<<<< HEAD:frontend/src/screens/admin/KnowledgeBaseViewScreen.js
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import { getKnowledgeBaseDetails } from '../../actions/knowlegeBaseAction'
=======
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import { getKnowledgeBaseDetails } from '../actions/knowlegeBaseAction'
>>>>>>> da15b425908059e45bde7ed0fc2f4c523c01104e:frontend/src/screens/KnowledgeBaseViewScreen.js
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const KnowledgeBaseViewScreen = ({match}) => {
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
                <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="dashboard-title-wrapper">
                            <div className="dashboard-title">Support Information</div>
                            <div className="button-wrapper">
                                <NavLink to={`/admin/knowledge-base-edit/${knowledgeBase._id}/`} className="edit-btn"><FontAwesomeIcon icon={faPen}/>Edit</NavLink>
                            </div>
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
                        <div className="blue-bkg-title def-padding">
                            <span>Created by:</span>
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

                </DashboardContainer>
            )}
        </div>
    )
}
export default KnowledgeBaseViewScreen
