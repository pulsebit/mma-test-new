import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import ClientLayout from '../../components/ClientLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, listUsers } from '../../actions/userActions'
import { createSupport } from '../../actions/supportActions'


const ClientSupportAdd = () => {

    const dispatch = useDispatch()
    const [ticket_no, setTicket_no] = useState('')
    const [problem_description, setProblem_description] = useState('')
    const [priority, setPriority] = useState('')

    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const { loading, user = {} } = useSelector(state => state.userDetails)
    const { creator = {} } = user || {}
    const assignee = creator._id
    console.log(assignee)

    useEffect(() => {
        dispatch(listUsers())
        dispatch(getUserDetails(userInfo._id))
    }, [dispatch])

    const onSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(createSupport(ticket_no, problem_description, priority, assignee))
    }
    return (
        <ClientLayout>
            <div className="edit-screen">
                <Form onSubmit={onSubmitHandler}>
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
                                                    <label>Ticket Number:</label>
                                                    <span><input type="text" value={ticket_no} onChange={(e)=>setTicket_no(e.target.value)}/></span>
                                                </div>                                
                                            </Col>
                                            <Col md={6}>
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

                        <div className="button-wrapper def-padding">
                            <button type="submit" className='update-btn'>Save</button>
                        </div>
                </Form> 
            </div>
        </ClientLayout>
    )
}

export default ClientSupportAdd
