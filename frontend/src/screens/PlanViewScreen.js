import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import PaymentProduct from '../components/PaymentProduct'
import defaultImage from '../assets/images/user.png'
import { getPaymentPlanDetails } from '../actions/paymentPlanAction'
import { getProductDetails } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const PlanViewScreen = ({match}) => {
    const paymentPlanId = match.params.id
    
    
    const dispatch = useDispatch()
    const{ loading, paymentPlan, error } = useSelector(state => state.paymentPlanDetails)
    const productId = paymentPlan.product

    

    useEffect(() => {
        dispatch(getPaymentPlanDetails(paymentPlanId))
    },[dispatch, paymentPlanId])

    
    function descriptionMarkup() {
        return {__html: paymentPlan.description};
    }   

    function featuresMarkup() {
        return {__html: paymentPlan.features};
    }

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
                                                <span>{paymentPlanId}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span>{paymentPlan.name}</span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price</label>
                                                <span>{paymentPlan.price}</span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created: </label>
                                                <span>{paymentPlan.createdAt}</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details">
                                    <div className="details-wrapper">
                                        <label>Description:</label>
                                        <div dangerouslySetInnerHTML={descriptionMarkup()} />
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        <div dangerouslySetInnerHTML={featuresMarkup()} />
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <div className="button-wrapper">
                            <NavLink to={`/admin/plan/${paymentPlanId}/edit`} className="edit-btn">Edit</NavLink>
                        </div> 
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Products Included</span>
                            
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
                                                {productId ? (
                                                    productId.map((product) => (
                                                        <PaymentProduct key={product} id={product}/>
                                                    ))
                                                ) : (
                                                    <Loader /> 
                                                )}
                                                <td>
                                                    <div className="button-wrapper">
                                                        <NavLink to={`/admin/product/${paymentPlan._id}/edit`} className="edit-btn">Edit</NavLink>
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
