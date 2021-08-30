import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails }  from '../../actions/userActions'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import DashboardContainer from '../../components/DashboardContainer'
import defaultImage from '../../assets/images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const UserViewScreen = ({ match }) => {
    const userId = match.params.id
    const dispatch = useDispatch()
  
    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user} = userDetails
    console.log(user)
    

    useEffect(() => {
       dispatch(getUserDetails(userId))
    }, [dispatch, match])
     
    return (
        <>
        <div className="view-screen">
        { loading ? ( 
                <Loader /> 
            ) : error ? ( 
                <Message variant='danger'>{error}</Message>
            ) : (
            <DashboardContainer>
                <div className="section-wrapper mar-b-50">
                <div className="dashboard-title-wrapper">
                    <div className="dashboard-title">Basic Information</div>
                    <div className="button-wrapper">
                    <NavLink to={`/admin/users/${user._id}/edit`} className="edit-btn"><FontAwesomeIcon icon={faEdit}/>Edit</NavLink>
                </div>
                    </div>
                    <Row className="def-padding">
                    {/* <Col md={2}>
                        <div className="img-wrapper">
                            <img className="" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt='' />
                        </div>
                    </Col> */}
                    <Col md={12}>
                        <div className="user-details">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>ID</label>
                                        <span>{user._id }</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Full Name</label>
                                        <span>{user.name}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Mobile number</label>
                                        <span>{user.mobile_no}</span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Email</label>
                                        <span>{ user.email }</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Gender</label>
                                        <span>{user.gender}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Birthdate</label>
                                        <span>{user.birthdate}</span>
                                    </div>
                                </Col>
                                <Col md={12}>
                                    <div className="details-wrapper">
                                        <label>Address</label>
                                        <span>{user.address}</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Data Studio Link</label>
                                        <span>{user.dataStudioLink}</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                </div>
            
                <div className="section-wrapper mar-b-50">
                <div className="dashboard-title-wrapper">
                            <div className="dashboard-title">Membership Information</div>
                    </div>
                    <div className="user-details">
                        <Row>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Membership type</label>
                                    <span>Customer</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Payment plan</label>
                                    <span>Silver</span>
                                </div>
                            </Col>
                            <Col md={6}>
                            <div className="details-wrapper">
                                    <label>Amount due</label>
                                    <span>12 June 2022</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Renewal date</label>
                                    <span>212 June 2022</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="section-wrapper">
                <div className="dashboard-title-wrapper">
                            <div className="dashboard-title">Activity-log</div>
                    </div>
                    <div className="table-wrapper">
                        <table>
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
                        </table>
                    </div>
                </div>
            </DashboardContainer>
            )} 
            </div>
        </>
    )
}
export default UserViewScreen