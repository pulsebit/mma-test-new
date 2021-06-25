import React from 'react'
import { NavLink } from 'react-router-dom'


import { Row, Col, Container, Dropdown} from 'react-bootstrap'

import Sidebar from './Sidebar'

const ClientLayout = ({ children }) => {
    return (
        <div className="client-layout">
            <Container fluid>
            <Row className='layout'>
                <Col xs={12} md={2} className="sidebar def-padding">
                    <Sidebar />
                </Col>
                <Col xs={12} md={10} className="main-content">
                    
                    <div className="layout-wrapper">
                        {children}
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ClientLayout
