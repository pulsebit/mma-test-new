import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { listUsers } from '../actions/userActions'
import { createKnowledgeBase } from '../actions/knowlegeBaseAction'


const KnowledgeBaseAddScreen = () => {

    const dispatch = useDispatch()
    const [problem_description, setProblem_description] = useState('')
    const [solution, setSolution] = useState('')
    const [category, setCategory] = useState('')
    const [resolve_by, setResolve_by] = useState('')

    const { users } = useSelector( state => state.userList)

    useEffect(() => {
        dispatch(listUsers())
         
    }, [dispatch])

    const onSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(createKnowledgeBase(problem_description, solution, category, resolve_by))
    }
    return (
        <div className="edit-screen">
            <Form onSubmit={onSubmitHandler}>
                <DashboardContainer>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Add Support</span>
                            </div>
                            <Row>
                                <Col md={12}>
                                    <div className="user-details def-padding">
                                        <Row>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Issue:</label>
                                                    <textarea value={problem_description} onChange={(e)=>setProblem_description(e.target.value)}/>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Solution:</label>
                                                    <textarea value={solution} onChange={(e)=>setSolution(e.target.value)}/>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Resolve By:</label>
                                                    <span>
                                                        <select value={resolve_by} onChange={(e)=>setResolve_by(e.target.value)}>
                                                            <option value="">Select Client</option>
                                                            {users ? (
                                                                users.map((user) => (
                                                                    <option value={user._id} id={user.name}>{user.name}</option>
                                                                ))
                                                            ) : (
                                                                <h3>No Users Available</h3>
                                                            )}
                                                        </select>
                                                    </span>
                                                </div>                                  
                                            </Col>
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
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="button-wrapper def-padding">
                            <button type="submit" className='update-btn'>Save</button>
                        </div>

                </DashboardContainer>
            </Form> 
        </div>
    )
}

export default KnowledgeBaseAddScreen
