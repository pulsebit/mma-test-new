import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import ClientLayout from '../../components/ClientLayout'
import date from 'date-and-time'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { listEmailSupports } from '../../actions/emailSupportAction'


const ClientEmailSupportList = () => {
    const dispatch = useDispatch()
    
    const {loading, error, emailSupports } = useSelector( state => state.emailSupportList)

    useEffect(() => {
        dispatch(listEmailSupports())
    },[dispatch])

    return (
        <div> 
            <ClientLayout >
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Email Supports</div>
                        <div className="button-wrapper">
                            <NavLink to="/portal/email-support/add/" className="add-btn">Add New</NavLink>
                        </div>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Date Created</th>
                                    <th>Name</th>
                                    <th>Subject</th>
                                    <th>Department</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>	
                                { loading ? (
                                     <Loader2 />
                                ) : error ? (
                                    <Message variant='danger'>{error}</Message>
                                ) : ( 		   
                                    emailSupports.map((emailSupport) => (
                                        <tr key={emailSupport._id}>
                                            <td>{emailSupport._id}</td>
                                            <td>{date.format(new Date(emailSupport.createdAt), 'ddd, MMM DD YYYY')}</td>
                                            <td>{emailSupport.senderName}</td>
                                            <td>{emailSupport.department}</td>
                                            <td>{emailSupport.subject}</td>
                                            <td>{emailSupport.emailContent}</td>
                                            <td>
                                                <NavLink to={`/portal/knowledge-base/${emailSupport._id}`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                                <button className="delete-icon-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                            </td>
                                        </tr>
                                    ))     
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ClientLayout>
        </div>
    );
}

export default ClientEmailSupportList
