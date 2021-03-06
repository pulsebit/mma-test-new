import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import PaymentProduct from '../components/PaymentProduct'
import defaultImage from '../assets/images/user.png'
import { getPaymentPlanDetails } from '../actions/paymentPlanAction'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader2 from '../components/Loader2'
import date from 'date-and-time'

const PlanViewScreen = ({match}) => {
    const paymentPlanId = match.params.id
    
    const dispatch = useDispatch()
    
    const{ loading, paymentPlan, error } = useSelector(state => state.paymentPlanDetails)
    const includeProducts = paymentPlan.product

    useEffect(() => {
        dispatch(getPaymentPlanDetails(paymentPlanId))        
        dispatch(listProducts())

    },[dispatch, paymentPlanId])

    
    return (
        <div className="view-screen">
            <DashboardContainer>
            { loading ? ( 
                <Loader2 /> 
            ) : error ? ( 
                <Message variant='danger'>{error}</Message>
            ) : ( 
                <>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Payment Information</span>
                        </div>
                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <div className="inner-img-wrapper ">
                                        <img className="" src={defaultImage} alt='' />
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>ID:</label>
                                                <span>{paymentPlanId}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span>{paymentPlan.name}</span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price</label>
                                                <span>{paymentPlan.price}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created: </label>
                                                <span>{date.format(new Date(paymentPlan.createdAt), 'ddd, MMM DD YYYY')}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details">
                                    <div className="details-wrapper">
                                        <label>Description:</label>
                                        {ReactHtmlParser(paymentPlan.description)}
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        {ReactHtmlParser(paymentPlan.features)}
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <div className="button-wrapper">
                            <NavLink to={`/admin/plan/${paymentPlanId}/edit`} className="edit-btn">Edit</NavLink>
                        </div> 
                    </div>

                    <PaymentProduct id={paymentPlanId} includeProducts={includeProducts}/>
                </>
            )} 
            </DashboardContainer>
        </div>
    )
}
export default PlanViewScreen
