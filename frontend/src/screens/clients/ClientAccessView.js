import React, { useEffect, useState } from 'react'
import ClientLayout from '../../components/ClientLayout'
import { Form } from 'react-bootstrap'
import { getAccessDetails } from '../../actions/accessAction'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const ClientAccessView = ({match}) => {
    const accessId = match.params.id
    const dispatch = useDispatch()

    const { loading, access } = useSelector( state => state.accessDetails)
    console.log(access)

    useEffect(() => {
        dispatch(getAccessDetails(accessId))
    },[dispatch, accessId])
    
    return (
        <div className="view-screen">
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">{access.type} Credentials</div>
                    </div>
                    <div className="details-wrapper">
                        <label>Type</label>
                        <span>{access.type}</span>
                    </div>  
                    <div className="details-wrapper">
                        <label>URL:</label>
                        <span>{access.url}</span>
                    </div>
                    <div className="details-wrapper">
                        <label>Login URL:</label>
                        <span>{access.loginUrl}</span>
                    </div>
                    <div className="details-wrapper">
                        <label>Username</label>
                        <span>{access.username}</span>
                    </div>
                    <div className="details-wrapper">
                        <label>Password</label>
                        <span>{access.password}</span>
                    </div>
                    <div className="details-wrapper">
                        <label>Notes</label>
                        <span>{access.notes}</span>
                    </div>
                    <div className="button-wrapper def-padding">
                        <NavLink to={`/portal/access/${access._id}/edit`}className='edit-btn'>Edit</NavLink>
                    </div>
                </div>
            </ClientLayout>
        </div>
    )
}
export default ClientAccessView
