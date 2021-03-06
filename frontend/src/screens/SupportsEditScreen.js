import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSupport, getSupportDetails, updateSupport } from '../actions/supportActions'
import { listUsers } from '../actions/userActions'
import { SUPPORT_UPDATE_RESET } from '../constants/supportConstants'
import { createKnowledgeBase } from '../actions/knowlegeBaseAction'

const SupportsEditScreen = ({match, history}) => {
    const supportId = match.params.id
    const dispatch = useDispatch()
    const [ticket_no, setTicket_no] = useState('')
    const [problem_description, setProblem_description] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [category, setCategory] = useState('')
    const [assigneeInfo, setAssigneeInfo] = useState('')
    const [solution, setSolution] = useState('')

    const { users } = useSelector( state => state.userList)

    const { support } = useSelector( state => state.supportDetails)

    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = useSelector(state => state.suppportUpdate)
    
    const { client = {} , created_by = {}, assignee = {} } = support || {}


    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: SUPPORT_UPDATE_RESET})
            history.push('/admin/supports')  
        } 
        else {
            if(!support.ticket_no || support._id !== supportId) {
                dispatch(getSupportDetails(supportId))
            } else {
                setTicket_no(support.ticket_no)
                setProblem_description(support.problem_description)
                setPriority(support.priority)
                setStatus(support.status)
                setCategory(support.category)
                setAssigneeInfo(assignee._id)
            }
        }
        dispatch(listUsers())
         
    }, [dispatch, supportId, support, match, history, successUpdate] )

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateSupport({_id: supportId, problem_description, solution, status, priority, category, assigneeInfo}))
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteSupport(supportId))
    }

    const addToKnowledgeBase = (e) => {
        e.preventDefault()
        
        dispatch(createKnowledgeBase(problem_description, problem_description, category, assigneeInfo))
        dispatch(updateSupport({_id: supportId, problem_description, solution, status, priority, category, assigneeInfo}))
    }

    

    return (
        <div className="edit-screen">
            <Form onSubmit={onSubmitHandler}>
                <DashboardContainer>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Edit Support</span>
                            </div>
                            <Row>
                                <Col md={12}>
                                    <div className="user-details def-padding">
                                        <Row>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Ticket Number:</label>
                                                    <span><input type="text" value={ticket_no} onChange={(e)=>setTicket_no(e.target.value)}/></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Client Name:</label>
                                                    <span><input type="text" value={client.name} readOnly/></span>
                                                </div>
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
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Enter Assignee ID:</label>
                                                    <span>
                                                        <select id="listAssignees" value={assigneeInfo} onChange={(e)=>setAssigneeInfo(e.target.value)}>
                                                            <option value="">Select Assignee</option>
                                                            {users ? (
                                                                users.map((user) => (
                                                                    <option value={user._id} id={user._id}>{user.name}</option>
                                                                ))
                                                            ) : (
                                                                <h3>No Users Available</h3>
                                                            )}
                                                        </select>
                                                    </span>
                                                </div> 
                                                <div className="details-wrapper">
                                                        <label>Priority:</label>
                                                        <span>
                                                            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                                                                <option value="">Select Level</option>
                                                                <option value="Low">Low</option>
                                                                <option value="Medium">Medium</option>
                                                                <option value="High">High</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                                    <div className="details-wrapper">
                                                        <label>Status:</label>
                                                        <span>
                                                            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                                                                <option value="">Select Status</option>
                                                                <option value="Open">Open</option>
                                                                <option value="In Progress">In Progress</option>
                                                                <option value="Completed">Completed</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                            </Col>
                                            <Col md={12}>
                                                
                                                { status === 'Completed' ? (
                                                    <>
                                                        <div className="details-wrapper">
                                                            <label>Explain Issue:</label>
                                                            <textarea value={problem_description} onChange={(e)=>setProblem_description(e.target.value)}/>
                                                        </div>
                                                        <div className="details-wrapper">
                                                            <label>Solution:</label>
                                                            <textarea value={solution} onChange={(e)=>setSolution(e.target.value)}/>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <div className="details-wrapper">
                                                        <label>Explain Issue:</label>
                                                        <textarea value={problem_description} onChange={(e)=>setProblem_description(e.target.value)}/>
                                                    </div>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="button-wrapper def-padding">
                            { status === 'Completed' ? (
                                <>
                                    <button onClick={addToKnowledgeBase}className='add-btn'>Save and Add to Knowledge Base</button>
                                    <button type="submit" className='update-btn'>Save Only</button>
                                </>
                            ) : (
                                <button type="submit" className='update-btn'>Save</button>
                            )}
                            <button onClick={onDeleteHandler} className="delete-btn">Delete</button>
                        </div>

                </DashboardContainer>
            </Form> 
        </div>
    )
}
export default SupportsEditScreen
