import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import Seo from '../assets/images/seo.jpg'


const ProductEditScreen = () => {
    return (
        <div className="edit-screen">
            <DashboardContainer>
            <div className="section-wrapper">
                <div className="blue-bkg-title def-padding">
                    <span>Basic Information</span>
                </div>
                <Row>
                    <Col md={2}>
                        <div className="img-wrapper">
                            <div className="inner-img-wrapper ">
                                <img className="" src={Seo} alt='' />
                            </div>
                            <input type="file" Value="Edit Image" className="choose-file"/>
                        </div>
                    </Col>
                    <Col md={10}>
                        <div className="user-details def-padding">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>ID:</label>
                                        <span>2</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Name:</label>
                                        <span><input type="text" placeholder="SEO"/></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>SKU:</label>
                                        <span><input type="text" placeholder="A123"/></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Date Added:</label>
                                        <span><input type="text" placeholder="11/22/2021" /></span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                <div className="details-wrapper">
                                        <label>Category:</label>
                                        <span>
                                            <select>
                                                <option>Free</option>
                                                <option>Customer</option>
                                                <option>Customer</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Regular Price:</label>
                                        <span><input type="text" placeholder="599 AUD" /></span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Sale Price:</label>
                                        <span><input type="text" placeholder="599 AUD"/></span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="user-details def-padding">
                            <div className="details-wrapper">
                                <label>Description:</label>
                                <p><textarea></textarea></p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="user-details def-padding">
                            <div className="details-wrapper">
                                <label>Short Description:</label>
                                <p><textarea className="short-des"></textarea></p>
                            </div>
                            <div className="details-wrapper">
                                <label>Created by:</label>
                                <span><input type="text" placeholder="July Cabigas"/></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="button-wrapper def-padding">
                <NavLink to="/admin/product/edit" className="update-btn">Update Product</NavLink>
            </div>
                
        </DashboardContainer>
        </div>
    )
}
export default ProductEditScreen