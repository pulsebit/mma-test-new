import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import DashboardContainer from '../components/DashboardContainer'
import { getSupportByStatusDetails } from '../actions/supportActions'
import date from 'date-and-time'


const KnowledgeBaseListScreen = () => {
    const dispatch = useDispatch()
    
    const {loading, error, supports } = useSelector( state => state.supportDetailsByStatus)

    useEffect(() => {
        dispatch(getSupportByStatusDetails())
    },[dispatch])

    return (
        <div> 
            <DashboardContainer >
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Knowledge Base</span>
                        <NavLink to="/admin/knowledge-base-add/">Add</NavLink>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Ticket No</th>
                                    <th>Client</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Category</th>
                                    <th>Assignee</th>
                                    <th>Created By</th>
                                    <th>Date Created</th>
                                    <th>Action</th>
                                </tr>	
                                { loading ? (
                                     <Loader2 />
                                ) : error ? (
                                    <Message variant='danger'>{error}</Message>
                                ) : ( 		   
                                    supports.map((support) => (
                                        <tr key={support._id}>
                                            <td>{support.ticket_no}</td>
                                            <td>{support.client.name}</td>
                                            <td>{support.priority}</td>
                                            <td>{support.status}</td>
                                            <td>{support.category}</td>
                                            <td>{support.assignee.name}</td>
                                            <td>{support.created_by.name}</td>
                                            <td>{date.format(new Date(support.createdAt), 'ddd, MMM DD YYYY')}</td>
                                            <td>
                                                <NavLink to={`/admin/knowledge-base/${support._id}`} className="view-btn">View</NavLink>
                                            </td>
                                        </tr>
                                    ))     
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default KnowledgeBaseListScreen
