import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import { Row, Col } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import PaymentProduct from '../components/PaymentProduct'
import defaultImage from '../assets/images/user.png'
import { getPaymentPlanDetails, paymentPlanAddProduct } from '../actions/paymentPlanAction'
import { getProductDetails, listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'

const PlanViewScreen = ({match}) => {
    const paymentPlanId = match.params.id
    const [tempProduct, setTempProduct] = useState('')
    
    const dispatch = useDispatch()
    
    const{ loading, paymentPlan, error } = useSelector(state => state.paymentPlanDetails)
    const productsIncluded = paymentPlan.product 

    const { products } = useSelector( state => state.productList)


    useEffect(() => {
        dispatch(getPaymentPlanDetails(paymentPlanId))        
        dispatch(listProducts())

    },[dispatch, paymentPlanId])


    const addProductHandler = (e) => {
        e.preventDefault()
        dispatch(paymentPlanAddProduct({ _id: paymentPlanId, tempProduct}))
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
                                        {ReactHtmlParser(paymentPlan.description)}
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        {ReactHtmlParser(paymentPlan.features)}
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
                                <div className="button-wrapper">
                                    <select id="listProducts" onChange={(e)=> setTempProduct(e.target.value)}>
                                        <option value="">Select Product</option>
                                        {products ? (
                                            products.map((product) => (
                                                <option value={product._id} id={product.name}>{product.name}</option>
                                            ))
                                        ) : (
                                            <h3>No Products Available</h3>
                                        )}
                                    </select>
                                    <button onClick={addProductHandler} type="submit">+</button>
                                </div>
                        </div>
                        <Row>
                            <Col md={12}>
                            
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Date Added</th>
                                                <th>Action</th>
                                            </tr>
                                            
                                            {productsIncluded ? (
                                                productsIncluded.map((product) => ( 
                                                    <tr key={product._id}>
                                                        <td>{product.name}</td>
                                                        <td>${product.price}</td>
                                                        <td>{product.createdAt}</td>
                                                        <td>
                                                            <div className="button-wrapper">
                                                                <button className='delete-btn'>Delete</button>  
                                                            </div>  
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <Loader /> 
                                            )}
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                   
                    {/* <div className="section-wrapper">
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
                    </div> */}
                </>
            )} 
            </DashboardContainer>
        </div>
    )
}
export default PlanViewScreen
