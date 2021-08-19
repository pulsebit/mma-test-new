import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import defaultImage from '../../assets/images/user.png'
import ClientLayout from '../../components/ClientLayout'


const ClientStaffView = () => {
     
    return (
        <>
        <div className="view-screen">
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Basic Information</span>
                    </div>
                    <Row className="def-padding">
                    <Col md={2}>
                        <div className="img-wrapper">
                            <div className="inner-img-wrapper">
                                <img className="" src={defaultImage} alt='' />
                            </div>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="user-details">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>ID</label>
                                        <span>1</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Full Name</label>
                                        <span>John Smith</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Mobile number</label>
                                        <span>123456</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Email</label>
                                        <span>john@mma.com</span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Address</label>
                                        <span>24 Sydney Road, WILPINJONG, New South Wales</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Gender</label>
                                        <span>Male</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Birthdate</label>
                                        <span>5 March 1967</span>
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

                <Row>
                    <Col md={3}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Wp Login</span>
                            </div>
                            <div className="user-details">
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>mma@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>mma@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>mma@mma.com</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Website Links</span>
                            </div>
                            <div className="user-details">
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>mma@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>mma@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>mma@mma.com</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Data Studio Links</span>
                            </div>
                            <div className="user-details">
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>datastudio@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>datastudio@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>datastudio@mma.com</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Other Links</span>
                            </div>
                            <div className="user-details">
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>other@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>other@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Link: </label>
                                    <span>other@mma.com</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                            
                <div className="button-wrapper def-padding">
                    <NavLink to="/portal/edit-staff/" className="edit-btn">Edit Profile</NavLink>
                </div>
            </ClientLayout>
            </div>
        </>
    )
}
export default ClientStaffView