import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import ClientLayout from '../../components/ClientLayout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSupport, getSupportDetails, updateSupport } from '../../actions/supportActions'
import { listUsers } from '../../actions/userActions'
import { SUPPORT_UPDATE_RESET } from '../../constants/supportConstants'

const ClientSupportEdit = ({match, history}) => {
    const supportId = match.params.id
    const dispatch = useDispatch()
    const [ticket_no, setTicket_no] = useState('')
    const [problem_description, setProblem_description] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [category, setCategory] = useState('')
    const [assigneeInfo, setAssigneeInfo] = useState('')
    const [solution, setSolution] = useState('')

    const { support } = useSelector( state => state.supportDetails)

    const supportUpdate = useSelector(state => state.suppportUpdate)
    const  { loading:loadingUpdate = {}, error:errorUpdate = {}, success:successUpdate = {} }  = supportUpdate || {}
     
    const { client = {} , created_by = {}, assignee = {} } = support || {}

    console.log(support)


    useEffect(() => {
        if(successUpdate) {
            dispatch({ type: SUPPORT_UPDATE_RESET})
            history.push('/portal/supports')  
        } 
        else {
            setTicket_no(support.ticket_no)
            setProblem_description(support.problem_description)
            setPriority(support.priority)
            setStatus(support.status)
            setCategory(support.category)
            setAssigneeInfo(assignee._id)
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

    

    return (
        <div className="edit-screen">
            <Form onSubmit={onSubmitHandler}>
                <ClientLayout>
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
                                                    <span><input type="text" value={category} readOnly/></span>
                                                </div>                                      
                                            </Col>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Assignee</label>
                                                    <span><input type="text" value={assignee.name} readOnly/></span>
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
                                                        <span><input type="text" value={status} readOnly/></span>
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="button-wrapper def-padding">
                            <button type="submit" className='update-btn'>Save</button>
                            <button onClick={onDeleteHandler} className="delete-btn">Delete</button>
                        </div>

                </ClientLayout>
            </Form> 
        </div>
    )
}
export default ClientSupportEdit
