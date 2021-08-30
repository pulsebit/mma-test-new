import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPaperPlane, faSave, faTrash  } from '@fortawesome/free-solid-svg-icons'
import  { getUserDetails, updateUser, deleteUser } from '../../actions/userActions.js'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import DashboardContainer from '../../components/DashboardContainer'
import User from '../../assets/images/user.png'
import { USER_DELETE_RESET, USER_UPDATE_RESET }  from '../../constants/userConstants'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserEditScreen = ({ match, history }) => {
    const userId = match.params.id
    const dispatch = useDispatch() 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const [gender, setGender] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [mobile_no, setMobile_no] = useState('')
    const [dataStudioLink, setDataStudioLink] = useState('')
    const [address, setAddress] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails
    console.log(user)

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = userUpdate


    const userDelete = useSelector(state => state.userDelete)
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = userDelete

    useEffect(() => {
         if(successUpdate) {
            toast.success('Profile successfully updated.',{
                position: "bottom-right",});
                dispatch({ type: USER_UPDATE_RESET})
                setTimeout(() => {
                    history.push(`/admin/users-view/${user._id}`)
                  }, 5000);
        } else if(successDelete) {
                toast.error('Deleting Profile.',{
                position: "bottom-right",});
                dispatch({ type: USER_DELETE_RESET})
                setTimeout(() => {
                    history.push('/admin/users')
                  }, 5000);
        } else {
            if( !user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
                setGender(user.gender)
                setBirthdate(user.birthdate)
                setMobile_no(user.mobile_no)
                setAddress(user.address)
                setDataStudioLink(user.dataStudioLink)
            }
        }
    }, [dispatch, userId, user, match, history, successUpdate, successDelete])


    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin, mobile_no, gender, birthdate, address, dataStudioLink}))
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteUser(userId))
    }

    return (
        <div className="edit-screen">
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
                        <div className="section-wrapper mar-b-50">
                            <div className="dashboard-title-wrapper">
                                <div className="dashboard-title">Basic Information</div>
                            </div>
                            <Row>
                                {/* <Col md={2}>
                                    <div className="img-wrapper">
                                        <img className="" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt='' />
                                        <div className="upload-btn">
                                            <input type="file" Value="Edit Image" className="choose-file"/>
                                            <FontAwesomeIcon icon={faCamera} className="camera"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                </Col> */}
                                <Col md={12}>
                                    <div className="user-details def-padding">
                                        <Row>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Full Name:</label>
                                                    <span><input type="text" name="fullname" value={name} onChange={(e) => setName(e.target.value)} /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Mobile number:</label>
                                                    <span><input type="text" value={mobile_no} onChange={(e)=>setMobile_no(e.target.value)} /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Email:</label>
                                                    <span><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></span>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Address:</label>
                                                    <span><input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Gender:</label>
                                                    <span>
                                                        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Others</option>
                                                        </select>
                                                    </span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Birthdate:</label>
                                                    <span><input type="date" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} /></span>
                                                </div>
                                            </Col>
                                            <Col md={12}>
                                                <div className="details-wrapper">
                                                    <label>Data Studio Link:</label>
                                                    <span><input type="text" id="dataStudioInput" value={dataStudioLink} onChange={(e)=>setDataStudioLink(e.target.value)}/></span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="section-wrapper mar-b-50">
                        <div className="dashboard-title-wrapper">
                                <div className="dashboard-title">Membership Info</div>
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
                            <div className="dashboard-title-wrapper">
                                <div className="dashboard-title">Activity-log</div>
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
                            <button type="submit" value="Update" className='update-btn'><FontAwesomeIcon icon={faSave}/>Save</button>
                            <button onClick={onDeleteHandler} className='delete-btn'><FontAwesomeIcon icon={faTrash}/>Delete</button>  
                        </div>
                    </Form>
                    <ToastContainer />
                </>
            </DashboardContainer>
             )}
        </div>
    )
}
export default UserEditScreen