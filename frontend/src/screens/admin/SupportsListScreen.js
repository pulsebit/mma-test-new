import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import DashboardContainer from '../../components/DashboardContainer'
import { listSupports } from '../../actions/supportActions'
import date from 'date-and-time'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const SupportsListScreen = () => {
    const dispatch = useDispatch()
    
    const supportList = useSelector( state => state.supportList)
    const {loading, error, supports } = supportList 
    console.log(supports)

    useEffect(() => {
        dispatch(listSupports())
    },[dispatch])

    return (
        <div> 
            <DashboardContainer >
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Supports List</div>
                        <div className="button-wrapper">
                            <NavLink to="/admin/add-support/" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/>Add New</NavLink>
                        </div>
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
                                    <th>Date Created</th>
                                    <th></th>
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
                                            <td>{date.format(new Date(support.createdAt), 'ddd, MMM DD YYYY')}</td>
                                            <td>
                                                <NavLink to={`/admin/supports/${support._id}`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                                <button className="delete-icon-btn"><FontAwesomeIcon icon={faTrash}/></button>
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
