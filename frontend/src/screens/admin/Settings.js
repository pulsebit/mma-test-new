import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../../components/DashboardContainer'
import Seo from '../../assets/images/seo.jpg'


const Settings = () => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                <Row>
                    <Col md={4}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Acount Settings</span>
                            </div>
                            <div className="user-details def-padding">
                                <div className="user-details def-padding">
                                    <div className="details-wrapper">
                                        <label>Full Name</label>
                                        <span>Steve Smith</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Mobile number</label>
                                        <span>123456</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Email</label>
                                        <span>steve@mma.com</span>
                                    </div>
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
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Title Settings</span>
                            </div>
                            <div className="user-details def-padding">
                                <div className="user-details def-padding">
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Title Settings</span>
                            </div>
                            <div className="user-details def-padding">
                                <div className="user-details def-padding">
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Other Settings</label>
                                        <span>Other Settings</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>                
                    <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Title Setting</span>
                    </div>
                    <div className="user-details def-padding">
                        <Row>
                            <Col md={4}>
                                <span className="title">Sutb Title Settings</span>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <span className="title">Sutb Title Settings</span>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <span className="title">Sutb Title Settings</span>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Setting</label>
                                    <span>Other Setting</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default Settings