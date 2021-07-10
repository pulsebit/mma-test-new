import React from 'react'
import { NavLink } from 'react-router-dom'
import { Row, Col , Container } from 'react-bootstrap'

const Profile = () => {
    return (
        <div className="profile view-screen">
            <Container>
            <div className="user-details">
                <div className="pad-tb-60">
                        <NavLink to="/profile/edit" >Edit Profile</NavLink>
                    <Row>
                        <Col md={4}>
                            <div className="c-box">
                                <div className="img-wrapper ">
                                    <img className="" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt='' />
                                </div>
                                <div className="details-wrapper">
                                    <label>ID</label>
                                    <span>1001A</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Full Name</label>
                                    <span>John Smith</span>
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
                                    <span>john@mma.com</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Address</label>
                                    <span>24 Sydney Road, WILPINJONG, New South Wales</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Gender</label>
                                    <span>Male</span>
                                </div>
                                <div className="details-wrapper">
                                    <label>Birthdate</label>
                                    <span>5 March 1967</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={12}> 
                            <div className="c-box mar-tb-20">
                                <div className="details-wrapper">
                                    <label>Other Information:</label>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Profile
