import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  { getUserDetails, updateUser, deleteUser } from 'store/actions/userActions.js'
import { Row, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import  { getUserDetails, updateUser, deleteUser } from '../actions/userActions.js'
import Message from '../components/Message'
import Loader from '../components/Loader'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import { USER_UPDATE_RESET }  from 'store/constants/userConstants'


const UserEditScreen = ({ match, history }) => {
    const userId = match.params.id
    const dispatch = useDispatch() 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = userUpdate


    const userDelete = useSelector(state => state.userDelete)
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = userDelete

    useEffect(() => {
        if(successUpdate || successDelete) {
            dispatch({ type: USER_UPDATE_RESET})
            history.push('/dashboard/users')
        } 
        else {
            if( !user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }
    }, [dispatch, userId, user, match, history, successUpdate, successDelete])


    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin}))
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteUser(userId))
    }

    return (
        <div className="edit-user-screen">
        {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            { loading ? ( 
                <Loader /> 
            ) : error ? ( 
                <Message variant='danger'>{error}</Message>
            ) : (
            <DashboardContainer>
            
                <>
                    <Form onSubmit={onSubmitHandler}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Basic Information</span>
                            </div>
                            <Row>
                                <Col md={2}>
                                    <div className="img-wrapper">
                                        <img className="" src={User} alt='' />
                                        <div className="upload-btn">
                                            <input type="file" Value="Edit Image" className="choose-file"/>
                                            <FontAwesomeIcon icon={faCamera} className="camera"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <div className="user-details def-padding">
                                        <Row>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Full Name:</label>
                                                    <span><input type="text" name="fullname" value={name} onChange={(e) => setName(e.target.value)} /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Mobile number:</label>
                                                    <span><input type="text" placeholder="+61 7 7010 1111"/></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Email:</label>
                                                    <span><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></span>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Address:</label>
                                                    <span><input type="text" placeholder="24 Sydney Road, WILPINJONG, New South Wales"/></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Gender:</label>
                                                    <span>
                                                        <select>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Others</option>
                                                        </select>
                                                    </span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Birthdate:</label>
                                                    <span><input type="date" /></span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="section-wrapper ">
                            <div className="blue-bkg-title def-padding">
                                <span>Membership Info</span>
                            </div>
                            <div className="user-details def-padding">
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Membership type:</label>
                                            <span>
                                                <select>
                                                    <option>Customer</option>
                                                    <option>Guest</option>
                                                    <option>Others</option>
                                                </select>
                                            </span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Payment plan:</label>
                                            <span>
                                                <select>
                                                    <option>Gold</option>
                                                    <option>Silver</option>
                                                    <option>Platinum</option>
                                                </select>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="details-wrapper">
                                            <label>Amount due:</label>
                                            <span><input type="date" /></span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Renewal date:</label>
                                            <span><input type="date" /></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Activity-log</span>
                            </div>
                            <div className="table-wrapper def-padding">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className="date">Date</th>
                                            <th className="notes">Notes</th>
                                            <th className="updated-by">Updated By:</th>
                                            
                                        </tr>				
                                        <tr>
                                            <td className="date">25 March 2021</td>
                                            <td className="notes">Full name has been updated</td>
                                            <td className="updated-by">July</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Update" className='update-btn'>Update</button>
                            <button onClick={onDeleteHandler} className='delete-btn'>Delete</button>  
                        </div>
                    </Form>
                </>
            </DashboardContainer>
             )}
        </div>
    )
}
export default UserEditScreen