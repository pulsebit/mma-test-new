import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

const PaymentMethodAdd = () => {
    return (
        <div className="edit-screen">
            <Container>
            <div className="section-wrapper pad-tb-60">
                <div className="blue-bkg-title def-padding">
                    <span>Billing Information</span>
                </div>
                <div className="user-details def-padding">
                    <Row>
                        <Col md={6}>
                            <div className="details-wrapper">
                                <label>Billing Name</label>
                                <span><input type="text" name="" id="" /></span>
                            </div>
                            <div className="details-wrapper">
                                <label>Credit Card Number</label>
                                <span><input type="text" name="" id="" /></span>
                            </div>
                            <div className="details-wrapper">
                                <label>Payment Method</label>
                                <span>
                                    <select name="" id="">
                                        <option value="">Select Method</option>
                                        <option value="">Stripe</option>
                                        <option value="">Paypal</option>
                                    </select>
                                </span>
                            </div>
                            <div className="details-wrapper">
                                <label>Expiration date</label>
                                <span><input type="date" name="" id="" /></span>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="details-wrapper">
                                <label>Security code</label>
                                <span><input type="text" name="" id="" /></span>
                            </div>
                            <div className="details-wrapper">
                                <label>Country</label>
                                <span>
                                    <select name="" id="">
                                        <option value="">Select Country</option>
                                        <option value="">Afghanistan</option>
                                        <option value="">Albania</option>
                                        <option value="">Algeria</option>
                                        <option value="">Andorra</option>
                                        <option value="">Angola</option>
                                        <option value="">Antigua and Barbuda</option>
                                        <option value="">Argentina</option>
                                        <option value="">Armenia</option>
                                        <option value="">Australia</option>
                                        <option value="">Austria</option>
                                    </select>
                                </span>
                            </div>
                            <div className="details-wrapper">
                                <label>Zip Code</label>
                                <span><input type="text" name="" id="" /></span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="button-wrapper def-padding">
                <button type="submit" value="Update" className='update-btn'>Save</button>
                <NavLink to='/payment-method'> or Cancel</NavLink> 
            </div>
            </Container>
        </div>
    )
}

export default PaymentMethodAdd
