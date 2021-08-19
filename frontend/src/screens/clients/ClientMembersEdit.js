import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import ClientLayout from '../../components/ClientLayout'
import defaultImage from '../../assets/images/user.png'

const ClientMembersEdit = () => {
    return (
        <div className="view-screen">
            <ClientLayout>
            <div className="section-wrapper">
                <div className="blue-bkg-title def-padding">
                    <span>Basic Information</span>
                </div>
                <Row>
                    <Col md={2}>
                        <div className="img-wrapper">
                            <div className="inner-img-wrapper ">
                                <img className="" src={defaultImage} alt='' />
                                <input type="file" Value="Edit Image" className="choose-file"/>
                            </div>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="user-details def-padding">
                        <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>ID</label>
                                        <span>1</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Full Name</label>
                                        <span><input type="text" name="" id="" /></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Mobile number</label>
                                        <span>123456</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Email</label>
                                        <span><input type="text" name="" id="" /></span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Address</label>
                                        <span><input type="text" name="" id="" /></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Gender</label>
                                        <span>
                                            <select name="" id="">
                                                <option value="">Male</option>
                                                <option value="">Female</option>
                                                <option value="">Others</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Birthdate</label>
                                        <span><input type="date" name="" id="" /></span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Membership Information</span>
                    </div>
                    <div className="user-details">
                        <Row>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Membership type</label>
                                    <span>
                                        <select>
                                            <option>Free</option>
                                            <option>Customer</option>
                                            <option>Customer</option>
                                        </select>
                                    </span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Payment plan</label>
                                    <span>
                                        <select>
                                            <option>Free</option>
                                            <option>Customer</option>
                                            <option>Customer</option>
                                        </select>
                                    </span>
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

            <div className="button-wrapper def-padding">
                <button type="submit" value="Update" className='update-btn'>Update</button>
                <button className='delete-btn'>Delete</button>  
            </div>
                
            </ClientLayout>
        </div>
    )
}

export default ClientMembersEdit
