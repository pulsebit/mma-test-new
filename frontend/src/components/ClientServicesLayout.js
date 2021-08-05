import React from 'react'
import { Row, Col } from 'react-bootstrap'

import ClientLayout from './ClientLayout'
import ClientServicesTab from './ClientServicesTab'

const ClientServicesLayout = ({children}) => {
    return (
        <div>
            <ClientLayout>
                
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
                <ClientServicesTab/>
                <div className="main-content def-padding">
                    {children}
                    <div className="button-wrapper def-padding">
                        <button type="submit" value="Update" className='update-btn'>Update</button>
                        <button className='delete-btn'>Delete</button>  
                    </div>
                </div>
            </div>

            </ClientLayout>
        </div>
    )
}
export default ClientServicesLayout
