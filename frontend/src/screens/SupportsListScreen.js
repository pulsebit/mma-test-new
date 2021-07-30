import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import DashboardContainer from '../components/DashboardContainer'
import { listSupports } from '../actions/supportActions'

const SupportsListScreen = () => {
    const dispatch = useDispatch()

    const supportList = useSelector( state => state.supportList)
    const {loading, error, supports } = supportList

    useEffect(() => {
        dispatch(listSupports())
    },[dispatch])

    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Supports List</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Ticket No</th>
                                    <th>Client Name</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Category</th>
                                    <th>Assignee</th>
                                    <th>Action</th>
                                </tr>	
                                { loading ? (
                                     <Loader />
                                ) : error ? (
                                    <Message variant='danger'>{error}</Message>
                                ) : ( 		   
                                    supports.map((support) => (
                                        <tr key={support._id}>
                                            <td>{support._id}</td>
                                            <td>Full name</td>
                                            <td>{support.priority}</td>
                                            <td>{support.status}</td>
                                            <td>{support.category}</td>
                                            <td>{support.created_by}</td>
                                            <td>
                                                <NavLink to={`/admin/supports/${support._id}`} className="view-btn">View</NavLink>
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

export default SupportsListScreen
