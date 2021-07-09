import React from 'react'
import { Row, Col, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import ClientSidebar from './ClientSidebar'
import ProfileImage from '../assets/images/user.png'

const ClientLayout = ({ children }) => {
    return (
        <div className="client-layout">
            <Container fluid>
            <div className='layout'>
                <div className="sidebar def-padding">
                    <div className="res-sidebar">
                        <ClientSidebar />
                    </div>
                    <div className="basic-info">
                        <div className="inner-img-wrapper">
                            <img className="" src={ProfileImage} alt='' />
                            <span>John Doe</span>
                        </div>

                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>123456789</span>
                        </div>

                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>john@mma.com</span>
                        </div>

                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <span>24 Sydney Road, WILPINJONG, New South Wales</span>
                        </div>

                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>100</span>
                        </div>
                        
                    </div>
                    <div className="des-sidebar">
                        <ClientSidebar />
                    </div>
                </div>
                <div className="main-content">
                    <div className="layout-wrapper">
                        {children}
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default ClientLayout
