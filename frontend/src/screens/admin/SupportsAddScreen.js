import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import DashboardContainer from '../../components/DashboardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { createSupport } from '../../actions/supportActions'
import { listUsers } from '../../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SUPPORT_CREATE_RESET } from '../../constants/supportConstants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'


const SupportsAddScreen = ({history}) => {

    const dispatch = useDispatch()
    const [client, setClient] = useState('')
    const [ticket_no, setTicket_no] = useState('')
    const [problem_description, setProblem_description] = useState('')
    const [priority, setPriority] = useState('')
    const [status, setStatus] = useState('')
    const [category, setCategory] = useState('')
    const [assignee, setAssignee] = useState('')
    const [dataStudioLink, setDataStudioLink] = useState('')
    

    const { users } = useSelector( state => state.userList)

    const { success:successCreate } = useSelector( state => state.userCreate)

    const { success:successCreateSupport } = useSelector( state => state.supportCreate)
    


    useEffect(() => {
        dispatch(listUsers())

        if (successCreateSupport) {
            toast.success('Publishing support..',{
            position: "bottom-right",});
            setTimeout(() => {
                history.push(`/admin/supports`)
              }, 5000);
            dispatch({ type: SUPPORT_CREATE_RESET})
        }
         
    }, [dispatch, successCreateSupport])

    const onSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(createSupport(client, ticket_no, problem_description, status, priority, category, assignee))
    }
    return (
        <div className="edit-screen">
            <Form onSubmit={onSubmitHandler}>
                <DashboardContainer>
                        <div className="section-wrapper">
                            <div className="dashboard-title-wrapper">
                                <div className="dashboard-title">Add Support</div>
                            </div>
                            <Row>
                                <Col md={12}>
                                    <div className="fill-up">
                                        <Row>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Ticket Number:</label>
<<<<<<< HEAD:frontend/src/screens/admin/SupportsAddScreen.js
                                                    <input type="number" value={ticket_no} onChange={(e)=>setTicket_no(e.target.value)}/>
=======
                                                    <input type="text" value={ticket_no} onChange={(e)=>setTicket_no(e.target.value)}/>
>>>>>>> da15b425908059e45bde7ed0fc2f4c523c01104e:frontend/src/screens/SupportsAddScreen.js
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Select Client:</label>
                                                    <span>
                                                        <select id="listClients" value={client} onChange={(e)=>setClient(e.target.value)}>
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
                                                    <label>Select Assignee:</label>
                                                    <span>
                                                        <select id="listAssignees" value={assignee} onChange={(e)=>setAssignee(e.target.value)}>
                                                            <option value="">Select Assignee</option>
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
                                                                <option value="Assigned">Assigned</option>
                                                                <option value="In Process">In Process</option>
                                                                <option value="Declined">Declined</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="details-wrapper">
                                                    <label>Explain Issue:</label>
                                                    <span><textarea value={problem_description} onChange={(e)=>setProblem_description(e.target.value)}/></span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

<<<<<<< HEAD:frontend/src/screens/admin/SupportsAddScreen.js
                        <div className="button-wrapper def-padding j-c-end">
=======
                        <div className="button-wrapper j-c-end">
>>>>>>> da15b425908059e45bde7ed0fc2f4c523c01104e:frontend/src/screens/SupportsAddScreen.js
                            <button type="submit" className='save-btn'><FontAwesomeIcon icon={faSave}/>Save</button>
                        </div>
                        <ToastContainer />
                </DashboardContainer>
            </Form> 
        </div>
    )
}

export default SupportsAddScreen
