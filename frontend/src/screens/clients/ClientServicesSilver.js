import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ClientServicesLayout from '../../components/ClientServicesLayout'

const ClientServicesSilver = () => {
    return (
        <div>
        <div className="view-screen">
            <ClientServicesLayout>
                    <Row>
                        <Col md={12}>
                            <div className="user-details">
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>ID:</label>
                                            <span>4</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Name:</label>
                                            <span>Silver</span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Date Added:</label>
                                            <span>11/22/2021</span>
                                        </div>
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
                                    <Col md={6}>
                                        <div className="user-details def-padding">
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
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    
            </ClientServicesLayout>
        </div>
    </div>
    )
}
export default ClientServicesSilver
