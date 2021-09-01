import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentPlanDetails } from '../../actions/paymentPlanAction'
import ClientLayout from '../../components/ClientLayout'
import Loader2 from '../../components/Loader2'
import Message from '../../components/Message'
import date from 'date-and-time'
import ReactHtmlParser from 'react-html-parser'
import PaymentProduct from '../../components/PaymentProduct'
import { NavLink } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { createCheckout } from '../../actions/checkoutAction'


const ClientServiceView = ({match}) => {
    const paymentPlanId = match.params.id
    
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const isAdmin = userInfo.isAdmin
    
    const{ loading, paymentPlan  = {} , error } = useSelector(state => state.paymentPlanDetails) || {}
    const includeProducts = paymentPlan.product

    useEffect(() => {
        dispatch(getPaymentPlanDetails(paymentPlanId))

    },[dispatch, paymentPlanId])

    const handleToken = (token, addresses) => {
       dispatch(createCheckout(token, paymentPlan))
    }

    // async function handleToken(token, addresses) {
    //     console.log({token, addresses})

    //     const response = await axios.post(`api/checkout`, {
    //         token, 
    //         paymentPlan
    //     })
    //     const { status } = response.data
    //     if (status  === 'success') {
    //       console.log("success!")  
    //     } else {
    //         console.log("something went wrong!") 
    //     }
    // }
    return (
        <div className="view-screen">
            <ClientLayout>
                { loading ? ( 
                    <Loader2 /> 
                ) : error ? ( 
                    <Message variant='danger'>{error}</Message>
                ) : ( 
                    <>
                        <div className="section-wrapper">
                            <div className="dashboard-title-wrapper">
                                <div className="dashboard-title">Payment Information</div>
                            </div>
                            <Row>
                                <Col md={2}>
                                    <div className="img-wrapper">
                                        <div className="inner-img-wrapper ">
                                            <img className="" src="https://180dc.org/wp-content/uploads/2016/08/default-profile.png" alt='' />
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
                        </div>

                        <PaymentProduct id={paymentPlanId} includeProducts={includeProducts} isAdmin={isAdmin}/>
                        <div className="button-wrapper def-padding">
                            <StripeCheckout 
                                stripeKey="pk_test_51Ix0jGDU4maXsdFI9A40zXo7KYYxElaakyASWOZtAZnjna1sVRCL14hlZIyAhmJkI9pp89W0IqpyqWBIDaYftzlD00lnHFM9f4"
                                token={handleToken}
                                billingAddress
                                shippingAddress
                                price={paymentPlan.price}
                            />
                           <button className="add-btn">Upgrade</button>
                        </div> 
                    </>
                )} 
            </ClientLayout>
        </div>
    )
}

export default ClientServiceView