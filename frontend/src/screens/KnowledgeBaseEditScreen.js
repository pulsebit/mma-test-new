import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import date from 'date-and-time'
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import { deleteKnowledgeBase, getKnowledgeBaseDetails, updateKnowledgeBase } from '../actions/knowlegeBaseAction'
import { KNOWLEDGE_BASE_UPDATE_RESET } from '../constants/knowledgeBaseConstant'




const KnowledgeBaseViewScreen = ({match, history}) => {
    const knowledgeBasetId = match.params.id

    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    const [problem_description, SetProblem_description] = useState('')
    const [solution, setSolution] = useState('')

    const { loading, error, knowledgeBase } = useSelector( state => state.knowledgeBaseDetails)
    const { created_by = {},  } = knowledgeBase || {}

    const { success:successUpdate }  = useSelector(state => state.knowledgeBaseUpdate)

    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: KNOWLEDGE_BASE_UPDATE_RESET})
            history.push('/knowledge-base')  
        } 
        else {
            if( !knowledgeBase.category || knowledgeBase._id !== knowledgeBasetId) {
                dispatch(getKnowledgeBaseDetails(knowledgeBasetId))
            } else {
                setCategory(knowledgeBase.category)
                SetProblem_description(knowledgeBase.problem_description)
                setSolution(knowledgeBase.solution)
            }
        }
        
    },[dispatch, knowledgeBasetId, knowledgeBase, match, history, successUpdate])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateKnowledgeBase({ _id: knowledgeBasetId, category, problem_description, solution}))
        history.push('/admin/knowledge-base')  
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteKnowledgeBase(knowledgeBasetId))
        history.push('/admin/knowledge-base')  
    }

    return (
        <div className="edit-screen">
            { loading ? (
                	<Loader2/>
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Form onSubmit={onSubmitHandler}>
                <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Support Information</span>
                            <div className="button-wrapper">
                                <button type="submit" value="Update" className='update-btn'>Update</button>
                                <button onClick={onDeleteHandler} className='delete-btn'>Delete</button>
                            </div>
                        </div>
                        <div className="user-details def-padding">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Category:</label>
                                        <span>
                                            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                                                <option value="N/A">Select Category</option>
                                                <option value="Accounting">Accounting</option>
                                                <option value="Technical Support">Technical Support</option>
                                                <option value="Billing Support">Billing Support</option>
                                                <option value="Integration">Integration</option>
                                            </select>
                                        </span>
                                    </div> 
                                    <div className="details-wrapper">
                                        <label>Issue:</label>
                                        <textarea value={problem_description} onChange={(e)=>SetProblem_description(e.target.value)}/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Solution:</label>
                                        <textarea value={solution} onChange={(e)=>setSolution(e.target.value)}/>
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
            </Form>
            )}
        </div>
    )
}
export default KnowledgeBaseViewScreen
