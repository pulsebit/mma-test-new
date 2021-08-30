import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {Row, Col, Container} from 'react-bootstrap'
import DashboardContainer from '../../components/DashboardContainer'
import Seo from '../../assets/images/seo.jpg'
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { getProductDetails } from '../../actions/productActions'
import { getUserDetails } from '../../actions/userActions'

import { faPaperPlane, faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPaperPlane, faPen, faSave, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ProductViewScreen = ({match}) => {
    const productId = match.params.id
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetails
    
    useEffect(() => {
        dispatch(getProductDetails(productId))
    },[dispatch, match])

    
    function descriptionMarkup() {
        return {__html: product.description};
    }

    return (
        <div className="view-screen">
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Basic Information</div>
                        <div className="button-wrapper">
                            <NavLink to={`/admin/product-edit/${product._id}/`} className="edit-btn"><FontAwesomeIcon icon={faPen}/>Edit</NavLink>
                        </div>
                    </div>
                    <Row>
                        <Col md={2}>
                            <div className="img-wrapper">
                                <img className="" src="https://club.helsemin.dk/wp-content/themes/oria/images/placeholder.png" alt='' />
                            </div>
                        </Col>
                        <Col md={10}>
                            <div className="user-details def-padding">
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>ID:</label>
                                            <span>{productId}</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Name:</label>
                                            <span>{product.name}</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>SKU:</label>
                                            <span>A123</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Date Added:</label>
                                            <span>{product.createdAt}</span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                    <div className="details-wrapper">
                                            <label>Category:</label>
                                            <span>{product.category}</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Regular Price:</label>
                                            <span>${product.price}</span>
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
                                    <div dangerouslySetInnerHTML={descriptionMarkup()} />
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
                                    <span></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default ProductViewScreen