import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import  { getUserDetails, updateUser, deleteUser } from '../actions/userActions.js'
import { Row, Col, Form } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import '../styles/dashboard.css'
import { USER_UPDATE_RESET }  from '../constants/userConstants'


const EditUserScreen = ({ match, history }) => {
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
        <div>
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Edit Information</span>
                </div>
                <div className="edit-user-screen">
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                { loading ? ( 
                    <Loader /> 
                ) : error ? ( 
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <>
                    <Form onSubmit={onSubmitHandler}>
                     <Row>
                        <Col md={2}>
                            <div className="img-wrapper">
                                <div className="inner-img-wrapper">
                                    <img className="" src={User} alt='' />
                                </div>
                                <input type="file" Value="Edit Image" className="choose-file"/>
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="user-details">
                                <div className="basic">
                                    <div className="title">Basic</div>
                                    <Row>
                                        <Col md={6}>
                                            <div className='details-wrapper'>
                                                <label>Full name:</label>
                                                <input type="text" name="fullname" value={name} onChange={(e) => setName(e.target.value)} />
                                                <label>Mobile number:</label>
                                                <input type="text" />
                                                <label>Email:</label>
                                                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='details-wrapper'>
                                                <label>Address:</label>
                                                <input type="text" />
                                                <label>Gender:</label>
                                                <div class="gender-select" >
                                                    <select>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="others">Others</option>
                                                    </select>
                                                </div>
                                                <label>Birthdate:</label>
                                                <input type="date" />
                                            </div>
                                        </Col>                                            
                                    </Row>
                                </div>
                            </div>
                            <div className="user-details">
                                <div className="membership">
                                    <div className="title">Membership</div>
                                    <Row>
                                        <Col md={6}>
                                            <div className='details-wrapper'>
                                                <label>Membership type:</label>
                                                <div class="membership-select" >
                                                    <select>
                                                        <option>Free</option>
                                                        <option>Customer</option>
                                                        <option>Customer</option>
                                                    </select>
                                                </div>
                                                <label>Payment plan:</label>
                                                <div class="payment-select" >
                                                    <select>
                                                        <option >Gold</option>
                                                        <option >Silver</option>
                                                        <option >Platinum</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className='details-wrapper'>
                                                <label>Amount due:</label>
                                                <input type="date" />
                                                <label>Renewal date:</label>
                                                <input type="date" />
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}>
                            <input type="submit" value="Update" className="update-btn" />
                        </Col>
                    </Row>
                    </Form>  
                    <button onClick={onDeleteHandler} className='btn btn-danger'>Delete</button>  
                    </>
                )}
                </div>
            </DashboardContainer>
        </div>
    )
}
export default EditUserScreen