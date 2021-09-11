import React, { useEffect, useState } from 'react'
import ClientLayout from '../../components/ClientLayout'
import { Form } from 'react-bootstrap'
import { createAccess } from '../../actions/accessAction'
import { useDispatch } from 'react-redux'

const ClientAccessEdit = ({match, history}) => {
    const dispatch = useDispatch()
    const [type, setType] = useState('')
    const [url, setUrl] = useState('')
    const [loginUrl, setLoginUrl] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notes, setNotes] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createAccess(type, url, loginUrl, username, password, notes))
    }   

    //GiWorld
    
    return (
        <div className="edit-screen">
            <ClientLayout>
                <Form onSubmit={onSubmitHandler}>
                    <div className="fill-up">
                        <div className="details-wrapper">
                            <label>Type</label>
                            <span>
                                <select value={type} onChange={(e)=>setType(e.target.value)}>
                                    <option value="N/A"></option>
                                    <option value="Website">Website</option>
                                    <option value="CRM">CRM</option>
                                    <option value="Shopify">Shopify</option>
                                    <option value="Google Analytics">Google Analytics</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Instagram">Instagram</option>
                                </select>
                            </span>
                        </div>  
                        <div className="details-wrapper">
                            <label>URL:</label>
                            <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
                        </div>
                        <div className="details-wrapper">
                            <label>Login URL:</label>
                            <input type="text" value={loginUrl} onChange={(e)=>setLoginUrl(e.target.value)}/>
                        </div>
                        <div className="details-wrapper">
                            <label>Username</label>
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        </div>
                        <div className="details-wrapper">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="details-wrapper">
                            <label>Notes</label>
                            <textarea value={notes} onChange={(e)=>setNotes(e.target.value)}/>
                        </div>
                        <div className="button-wrapper">
                            <button type="submit" className='update-btn'>Save</button>
                        </div>
                    </div>
                </Form>
            </ClientLayout>
        </div>
    )
}
export default ClientAccessEdit
