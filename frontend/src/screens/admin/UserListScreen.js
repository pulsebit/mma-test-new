import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import DashboardContainer from '../../components/DashboardContainer'
import { deleteUser, listUsers }  from '../../actions/userActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const UserListScreen = ({ history }) => {
   const dispatch = useDispatch()

   const userList = useSelector( state => state.userList)
   const {loading, error, users } = userList

   const userLogin = useSelector( state => state.userLogin)
   const { userInfo } = userLogin

   useEffect(() => {
       if(userInfo && userInfo.isAdmin) {
            dispatch(listUsers()) 
       } else {
            history.push('/login')
       }
        
   }, [dispatch, history])

   const onDeleteHandler = ( userid) => {
        //e.preventDefault()
        console.log(userid)
        // dispatch(deleteUser(userid))
    }

    if ( loading ) {
        return (
            <DashboardContainer>
                <Loader2 /> 
            </DashboardContainer>
        )
    }

    
    return (
        <> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">User List</div>
                        <div className="button-wrapper">
                            <NavLink to="/admin/user-add/" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/>Add New</NavLink>
                        </div>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Plan</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                                { loading ? ( 
                                  <Loader2 /> 
                                ) : error ? ( 
                                  <Message variant='danger'>{error}</Message>
                                ) : (
                                     <>
                                        { users.map((user) => (
                                                <tr>
                                                    <td className="fullname">{user.name}</td>
                                                    <td className="email">{user.email}</td>
                                                    <td className="status">Active</td>
                                                    <td className="plan">Basic</td>
                                                    <td className="date">{user.createdAt}</td>
                                                    <td>
                                                   
                                                        <NavLink to={`/admin/users-view/${user._id}`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                                        <button className="delete-icon-btn" onClick={onDeleteHandler(user._id)} ><FontAwesomeIcon icon={faTrash}/></button>
                                                    </td>
                                                </tr>
                                         ))}
                                    </>
                                )} 

                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </>
    )
}

export default UserListScreen
