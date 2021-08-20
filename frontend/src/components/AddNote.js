import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Form, Row } from 'react-bootstrap'
import { createNote, getSupportNotes } from '../actions/noteAction'
import Loader2 from './Loader2'
import Message from './Message'
import date from 'date-and-time'


const AddNote = ({supportInfo, clientInfo, assigneeInfo}) => {
    const dispatch = useDispatch()

    const [note, setNote] = useState('')

    const { loading, notes, error } = useSelector(state => state.supportNotes)
    
    useEffect(() => {
        dispatch(getSupportNotes(supportInfo))
    },[dispatch, supportInfo])
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createNote(supportInfo, clientInfo, assigneeInfo, note))
        dispatch(getSupportNotes(supportInfo))
        setNote('')
    }


    return (
        
        <div className="edit-screen">
            
                <Row>
                    <Col md={6}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Notes</span>
                            </div>
                            <div className="table-wrapper def-padding">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Note</th>
                                            <th>Date Created</th>
                                            <th>Created by</th>
                                            
                                        </tr>
                                    { loading ? (
                                        <Loader2 />
                                    ) : error ? (
                                        <Message variant='danger'>{error}</Message>
                                    ) : (
                                        notes.map((note) => (
                                            <tr key={note._id} value={note._id} >
                                                <td><p>{note.note}</p></td>
                                                <td>{date.format(new Date(note.createdAt), 'ddd, MMM DD YYYY')}</td>
                                                <td>{note.creatorInfo.name}</td>
                                            </tr>
                                        ))
                                    )}	                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form onSubmit={onSubmitHandler}> 
                            <div >
                                <label>Add Note:</label>
                                <textarea value={note} onChange={(e)=>setNote(e.target.value)}/>
                                <div className="button-wrapper def-padding">
                                <button type="submit" className="update-btn">Save</button>
                                </div>
                                
                            </div>
                        </Form>
                    </Col>
                </Row>
            
        </div>
    )
}

export default AddNote
