import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentPlanDetails, getPaymentPlanProducts, paymentPlanAddProduct } from '../actions/paymentPlanAction'
import { listProducts } from '../actions/productActions'


import { Row, Col } from 'react-bootstrap'

import Loader from '../components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const PaymentProduct = ({id}) => {
    const dispatch = useDispatch()

    const [tempProduct, setTempProduct] = useState('')

    const { products } = useSelector( state => state.productList)

    const { paymentPlanProducts } = useSelector( state => state.paymentPlanProducts)

    
    const includeProducts = paymentPlanProducts.product || []
    

    useEffect(() => {
        dispatch(listProducts())
        dispatch(getPaymentPlanProducts(id))
    },[dispatch, id])
    

    const addProductHandler = (e) => {
        e.preventDefault()
        dispatch(paymentPlanAddProduct({ _id: id, tempProduct}))
        dispatch(getPaymentPlanProducts(id))
    }

    return (
        <> 
            <div className="dashboard-title-wrapper">
                <div className="dashboard-title-alone">Products Included</div>
                <div className="edit-screen">
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
                        <button onClick={addProductHandler} type="submit" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/></button>
                    </div>
                </div>
            </div>
            <div className="section-wrapper">
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
                                    
                                    {includeProducts.map((product) => ( 
                                            <tr key={product._id}>
                                                <td>{product.name}</td>
                                                <td>${product.price}</td>
                                                <td>{product.createdAt}</td>
                                                <td>
                                                    <div className="button-wrapper">
                                                        <button className='delete-icon-btn'><FontAwesomeIcon icon={faTrash}/></button>  
                                                    </div>  
                                                </td>
                                            </tr>
                                        ))}
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
