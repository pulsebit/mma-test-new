import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ClientLayout from '../../components/ClientLayout'
import User from '../../assets/images/user.png'


const ClientStaffAdd = () => {
        return (
        <div className="edit-user-screen">
            <ClientLayout>
                <>
                        <div className="section-wrapper">
                            <div className="blue-bkg-title def-padding">
                                <span>Basic Information</span>
                            </div>
                            <Row>
                                <Col md={2}>
                                    <div className="img-wrapper">
                                        <div className="inner-img-wrapper ">
                                            <img className="" src={User} alt='' />
                                        </div>
                                    </div>
                                    <input type="file" className="choose-file"/>
                                </Col>
                                <Col md={10}>
                                    <div className="user-details def-padding">
                                        <Row>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Full Name:</label>
                                                    <span><input type="text" /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Mobile number:</label>
                                                    <span><input type="text" /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Email:</label>
                                                    <span><input type="text" /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Address:</label>
                                                    <span><input type="text" /></span>    
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="details-wrapper">
                                                    <label>Gender:</label>
                                                    <span>
                                                        <select>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Others</option>
                                                        </select>
                                                    </span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Birthdate:</label>
                                                    <span><input type="date" /></span>
                                                </div>
                                                <div className="details-wrapper">
                                                    <label>Country:</label>
                                                    <span><input type="text" /></span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <div className="section-wrapper ">
                            <div className="blue-bkg-title def-padding">
                                <span>Postion</span>
                            </div>
                            <div className="user-details def-padding">
                                <Row>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Position:</label>
                                            <span><input type="text" /></span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Department:</label>
                                            <span><input type="text" /></span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Other Label:</label>
                                            <span><input type="text" /></span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Other Label:</label>
                                            <span><input type="text" /></span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Other Label:</label>
                                            <span><input type="text" /></span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>Other Label:</label>
                                            <span><input type="text" /></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Add" className='add-btn'>Add</button>
                        </div>
                </>
            </ClientLayout>
        </div>
    )
}
export default ClientStaffAdd