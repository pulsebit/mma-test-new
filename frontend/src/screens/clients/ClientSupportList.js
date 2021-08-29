import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getSupportListByCreator } from '../../actions/supportActions'
import { getUserDetails } from '../../actions/userActions'
import ClientLayout from '../../components/ClientLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const ClientSupportList = () => {
    const dispatch = useDispatch()

    const {userInfo} = useSelector((state) => state.userLogin)
    const {loading, user = {}, error } = useSelector(state => state.userDetails)
    const { creator = {} } = user
    const userId = userInfo._id

    const { supports } = useSelector(state => state.supportListByCreator)


    console.log(supports)

    useEffect(() => {
        dispatch(getUserDetails(userId))
        dispatch(getSupportListByCreator(userId))
    },[dispatch])
    return (
        <div> 
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Supports List</div>
                        <div className="button-wrapper">
                            <NavLink to="/portal/add-support/" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/>Add New</NavLink>
                        </div>
                    </div>
                    <div className="table-wrapper def-padding">
                        
                        <table>
                            <tbody>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Issue</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Date created</th>
                                    <th>Action</th>
                                </tr>

                                {supports ? (
                                    supports.map((support) => (
                                        <tr key={support._id}>
                                            <td>{support.ticket_no}</td>
                                            <td><p>{support.problem_description}</p></td>
                                            <td>{support.priority}</td>
                                            <td>{support.status}</td>
                                            <td>{support.createdAt}</td>
                                            
                                            <td>
                                                <NavLink to={`/portal/support/${support._id}`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                                <button className="delete-icon-btn"><FontAwesomeIcon icon={faTrash}/></button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <h3>No Support Available</h3>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ClientLayout>
        </div>
    );
}

export default ClientSupportList
