import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import Seo from '../assets/images/seo.jpg'


const ProductViewScreen = () => {
    return (
        <div className="view-screen">
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
                                            <span>SEO</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>SKU:</label>
                                            <span>A123</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Date Added:</label>
                                            <span>11/22/2021</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="details-wrapper">
                                            <label>Category:</label>
                                            <span>Web Development</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Regular Price:</label>
                                            <span>599 AUD</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Sale Price:</label>
                                            <span>599 AUD</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="user-details def-padding">
                                <div className="details-wrapper">
                                    <label>Description:</label>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="user-details def-padding">
                                <div className="details-wrapper">
                                    <label>Short Description:</label>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                                <div className="details-wrapper">
                                    <label>Created by:</label>
                                    <span>July Cabigas</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

                <div className="button-wrapper def-padding">
                    <NavLink to="/admin/product/edit" className="edit-btn">Edit Product</NavLink>
                    <input type="submit" value="Delete" className="delete-btn"/>
                </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default ProductViewScreen