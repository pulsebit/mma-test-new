import React from 'react'
import { Row, Col , Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

const ProfileEdit = () => {
    return (
        <div className="profile edit-screen">
            <Container>
            <div className="user-details">
                <div className="pad-tb-60">
                    <Row>
                        <Col md={4}>
                            <div className="c-box">
                                <div className="img-wrapper">
                                    <img className="" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt='' />
                                    <div className="upload-btn">
                                        <input type="file" Value="Edit Image" className="choose-file"/>
                                        <FontAwesomeIcon icon={faCamera} className="camera"></FontAwesomeIcon>
                                    </div>
                                </div>
                                
                                <div className="details-wrapper">
                                    <label>ID</label>
                                    <span>1001A</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Full Name</label>
                                    <span><input type="text" /></span>
                                </div>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="c-box">
                                <div className="details-wrapper">
                                    <label>Mobile number</label>
                                    <span>123456</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Email</label>
                                    <span><input type="text" /></span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Address</label>
                                    <span><input type="text" /></span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Gender</label>
                                    <span><input type="text" /></span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Birthdate</label>
                                    <span><input type="date" /></span>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}> 
                            <div className="c-box mar-tb-20">
                                <div className="details-wrapper">
                                    <label>Other Information:</label>
                                    <p><textarea name="" id=""></textarea></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="button-wrapper def-padding">
                        <button type="submit" value="Update" className='update-btn'>Save</button>
                        <NavLink to="/profile">Cancel</NavLink>
                    </div>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default ProfileEdit
