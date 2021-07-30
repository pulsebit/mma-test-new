import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentPlanDetails, paymentPlanAddProduct } from '../actions/paymentPlanAction'
import { getProductDetails, listProducts } from '../actions/productActions'


import { Row, Col } from 'react-bootstrap'

import Loader from '../components/Loader'


const PaymentProduct = ({ paymentPlanId }) => {
    const [tempProduct, setTempProduct] = useState('')
    
    const dispatch = useDispatch()
    
    const{ paymentPlan } = useSelector(state => state.paymentPlanDetails)
    const productsIncluded = paymentPlan.product 

    const { products } = useSelector( state => state.productList)


    useEffect(() => {
        //dispatch(getPaymentPlanDetails(paymentPlanId))        
        dispatch(listProducts())

    },[dispatch, paymentPlanId])

    const addProductHandler = (e) => {
        e.preventDefault()
        dispatch(paymentPlanAddProduct({ _id: paymentPlanId, tempProduct}))
    }

    return (
        <> 
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
                            {/* <PaymentProduct paymentPlanId={paymentPlanId} /> */}
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
        </>
    )
}

export default PaymentProduct
