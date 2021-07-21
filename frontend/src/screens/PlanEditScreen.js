import React, { useEffect } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { NavLink } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import { useDispatch, useSelector } from 'react-redux'
import defaultImage from '../assets/images/user.png'
import { listPaymentDetails } from '../actions/paymentPlanAction'
import Message from '../components/Message'
import Loader from '../components/Loader'

const PlanEditScreen = ({match}) => {
    const paymentPlanId = match.params.id
    const dispatch = useDispatch()
    const paymentDetails = useSelector(state => state.paymentDetails)
    const { 
        loading, 
        paymentPlanDetails, 
        error
    } = paymentDetails

    useEffect(() => {
        dispatch(listPaymentDetails(paymentPlanId))
    },[dispatch, match])


    return (
        <div className="edit-screen">
            <DashboardContainer>
                <>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Payment Information</span>
                        </div>
                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <div className="inner-img-wrapper ">
                                        <img className="" src={defaultImage} alt='' />
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>ID:</label>
                                                <span><input type="text" value={paymentPlanDetails._id} /></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span><input type="text" /></span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price</label>
                                                <span><input type="text" /></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created: </label>
                                                <span><input type="text" /></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details">
                                    <div className="details-wrapper">
                                        <label>Description:</label>
                                        <p><textarea name="" id=""></textarea></p>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Products Included</span>
                            <button type="submit" value="Add" className='add-btn'>Add New</button>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Short Description</th>
                                                <th>Price</th>
                                                <th>Date Added</th>
                                                <th>Action</th>
                                            </tr>				
                                            <tr>
                                                <td></td>
                                                <td><p></p></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Subcribers</span>
                            <button type="submit" value="Add" className='add-btn'>Add New</button>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                                <th>Date Added</th>
                                                <th>Date Due</th>
                                                <th>Action</th>
                                            </tr>				
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                </>
            </DashboardContainer>
        </div>
    );
}

export default PlanEditScreen
