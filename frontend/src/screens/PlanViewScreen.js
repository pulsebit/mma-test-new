import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import defaultImage from '../assets/images/user.png'
import { listPaymentDetails } from '../actions/paymentPlanAction'
import Message from '../components/Message'
import Loader from '../components/Loader'

const PlanViewScreen = ({match}) => {
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
        <div className="view-screen">
            <DashboardContainer>
            { loading ? ( 
                <Loader /> 
            ) : error ? ( 
                <Message variant='danger'>{error}</Message>
            ) : ( 
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
                                                <span>{paymentPlanDetails._id}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span>{paymentPlanDetails.name}</span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price</label>
                                                <span>{paymentPlanDetails.price}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created: </label>
                                                <span>{paymentPlanDetails.createdAt}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details">
                                    <div className="details-wrapper">
                                        <label>Description:</label>
                                        <p>{paymentPlanDetails.description}</p>
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        <ul>
                                            <li>Proin ac ipsum non lectus blandit tristique.</li>
                                            <li>Duis ut nisi tempus, varius quam sit amet, convallis tortor.</li>
                                            <li>Duis rutrum velit et aliquam vestibulum.</li>
                                            <li>Proin rhoncus ante nec erat egestas luctus.</li>
                                            <li>Morbi quis eros vel eros pellentesque volutpat.</li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <div className="button-wrapper">
                            <NavLink to={`/admin/plan/${paymentPlanDetails._id}/edit`} className="edit-btn">Edit</NavLink>
                        </div> 
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
                                                <td>{paymentPlanDetails.prod_name}</td>
                                                <td><p>{paymentPlanDetails.prod_short_description}</p></td>
                                                <td>{paymentPlanDetails.prod_price}</td>
                                                <td>{paymentPlanDetails.createdAt}</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to={`/admin/product/${paymentPlanDetails._id}/edit`} className="edit-btn">Edit</NavLink>
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
            )} 
            </DashboardContainer>
        </div>
    )
}
export default PlanViewScreen
