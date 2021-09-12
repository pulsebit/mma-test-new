import React, { useEffect, useState } from 'react'
import ClientLayout from '../../components/ClientLayout'
import { Form } from 'react-bootstrap'
import { createAccess, deleteAccess, getAccessDetails, updateAccess } from '../../actions/accessAction'
import { useDispatch, useSelector } from 'react-redux'
import { ACCESS_DELETE_RESET, ACCESS_UPDATE_RESET } from '../../constants/accessConstants'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientAccessEdit = ({match, history}) => {
    const accessId = match.params.id
    const dispatch = useDispatch()
    const [type, setType] = useState('')
    const [url, setUrl] = useState('')
    const [loginUrl, setLoginUrl] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notes, setNotes] = useState('')

    console.log(accessId)

    const { access } = useSelector( state => state.accessDetails)
    const { success: successUpdate } = useSelector( state => state.accessUpdate)
     const { success: successDelete } = useSelector( state => state.accessDelete)
	

    useEffect (() => {
        if(successUpdate) {
            toast.success('Updating Access..',{
            position: "bottom-right",});
            setTimeout(() => {
                history.push(`/portal/access`)
                }, 5000);
            dispatch({ type: ACCESS_UPDATE_RESET})
        } 
        else if(successDelete) {
            toast.error('Deleting Acces..',{
            position: "bottom-right",});
            setTimeout(() => {
                history.push(`/portal/Access`)
                }, 5000);
            dispatch({type: ACCESS_DELETE_RESET})
        } else {
            if (!access) {
                dispatch(getAccessDetails(accessId))
            } else {
                setType(access.type)
                setUrl(access.url)
                setLoginUrl(access.loginUrl)
                setUsername(access.username)
                setPassword(access.password)
                setNotes(access.notes)
            }
        }
        
    }, [dispatch, accessId,access, match, history, successUpdate, successDelete ])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateAccess({_id: accessId, type, url, loginUrl, username, password, notes}))
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteAccess(accessId))
    }
    
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
                            <button onClick={onDeleteHandler} className='delete-btn'>Trash</button>
                        </div>
                    </div>
                    <ToastContainer />
                </Form>
            </ClientLayout>
        </div>
    )
}
export default ClientAccessEdit
