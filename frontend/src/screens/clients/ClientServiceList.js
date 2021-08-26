import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentPlanListByCreator } from '../../actions/paymentPlanAction'
import { getUserDetails } from '../../actions/userActions'

import ClientLayout from '../../components/ClientLayout'
import Loader2 from '../../components/Loader2'
import Message from '../../components/Message'
import date from 'date-and-time'
import ReactHtmlParser from 'react-html-parser'

const ClientServiceList = () => {

    const dispatch = useDispatch()

    const {userInfo} = useSelector((state) => state.userLogin)
    const {loading, user = {}, error } = useSelector(state => state.userDetails)
    const { creator = {} } = user

    const { paymentPlan } = useSelector(state => state.paymentPlanListByCreator)
    console.log(paymentPlan)

    useEffect(() => {
        dispatch(getUserDetails(userInfo._id))
        dispatch(getPaymentPlanListByCreator(creator._id))
    },[dispatch])

    return (
        <ClientLayout>
            <div className="client-services">
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Current Plan</span>
                    </div>
                    <div className="view-screen">
                        <div className="user-details">
                            <Row>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>ID</label>
                                        <span>1</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Name</label>
                                        <span>Basic</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Subscribe Services/Products:</label>
                                            <ul className="subscribe-products">
                                                <li>Seo</li>
                                                <li>Wed Design</li>
                                                <li>Wed Development</li>
                                                <li>Other Products</li>
                                            </ul>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Date Started</label>
                                        <span>01/04/2121</span>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Due Date</label>
                                        <span>01/05/2121</span>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        <ul className="features">
                                            <li>Sed ut perspiciatis unde omnis</li>
                                            <li>Natus error sit voluptatem accusantium</li>
                                            <li>Enim ipsam voluptatem quia voluptas</li>
                                            <li>Voluptatem sequi nesciunt</li>
                                            <li>Sed ut perspiciatis unde omnis</li>
                                            <li>Natus error sit voluptatem accusantium</li>
                                            <li>Enim ipsam voluptatem quia voluptas</li>
                                            <li>Voluptatem sequi nesciunt</li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                
                <div className="section-wrapper pad-lr-60 mar-t-n-50 ">
                    <h2>Available Plans</h2>
                    { loading ? ( 
                        <Loader2 /> 
                    ) : error ? ( 
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <>
                            {paymentPlan.map((payment) => (
                                <div className="plans">
                                    <div className="plan-wrapper">
                                        <div className="img-wrapper">
                                            <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg" alt="" />
                                        </div>

                                        <div className="name">
                                            {payment.name}
                                        </div>
                                        <div className="features">
                                            {ReactHtmlParser(payment.features)}
                                        </div>
                                        <div className="price">
                                            ${payment.price}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </ClientLayout>
    )
}

export default ClientServiceList
