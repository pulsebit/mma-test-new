import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'

import Sidebar from './Sidebar'

const AdminDashboard = ({ children }) => {
    return (
        <div className="dashboard-container">
            <Container fluid>
            <Row className='dashboard'>
                <Col xs={12} md={2} className="sidebar def-padding">
                    <Sidebar />
                </Col>
                <Col xs={12} md={10} className="main-content">
                    <div className="member-list-wrapper">
                        <div className="main-data">
                            {children}
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default AdminDashboard
