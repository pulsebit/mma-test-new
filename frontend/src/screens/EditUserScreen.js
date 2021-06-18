import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import DashboardContainer from '../components/DashboardContainer'
import User from '../assets/images/user.png'
import '../styles/dashboard.css'


const EditUserScreen = () => {
    return (
        <div>
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Edit Information</span>
                </div>
                <div className="edit-user-screen">
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
                                                <input type="text" />
                                                <label>Mobile number:</label>
                                                <input type="text" />
                                                <label>Email:</label>
                                                <input type="text" />
                                            
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
                            <button className="update-btn">Update</button>
                        </Col>
                    </Row>
                </div>
            </DashboardContainer>
        </div>
    )
}
export default EditUserScreen