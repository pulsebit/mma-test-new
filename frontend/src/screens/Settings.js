import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import Seo from '../assets/images/seo.jpg'


const Settings = () => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Settings</span>
                    </div>
                    <div className="user-details def-padding">
                        <Row>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Site Title:</label>
                                    <span>Your Title</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Default Logo:</label>
                                    <div className="inner-img-wrapper">
                                        <img className="" src={Seo} alt='' />
                                    </div>    
                                </div>
                                <div className="details-wrapper">
                                    <label>Admin email:</label>
                                    <span>11/22/2021</span>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="details-wrapper">
                                    <label>Site description:</label>
                                    <span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Default Role When Register</span>
                    </div>
                    <div className="user-details def-padding">
                        <Row>
                            <Col md={4}>
                                <span className="title">Customer</span>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <span className="title">Subscriber</span>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <span className="title">Admin</span>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Other Label</label>
                                    <span>Other Content</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="button-wrapper def-padding">
                    <NavLink to="/admin/product/edit" className="edit-btn">Edit Category</NavLink>
                    <input type="submit" value="Delete" className="delete-btn"/>
                </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default Settings