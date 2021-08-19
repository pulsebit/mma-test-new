import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paymentPlanAddProduct } from '../actions/paymentPlanAction'
import { listProducts } from '../actions/productActions'


import { Row, Col } from 'react-bootstrap'

import Loader from '../components/Loader'


const PaymentProduct = ({id, includeProducts}) => {
    console.log(id)
    console.log(includeProducts)


    const dispatch = useDispatch()

    const [tempProduct, setTempProduct] = useState('')

    const { products } = useSelector( state => state.productList)

    
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch ])
    

    const addProductHandler = (e) => {
        e.preventDefault()
        dispatch(paymentPlanAddProduct({ _id: id, tempProduct}))
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
                        <div className="table-wrapper def-padding">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Date Added</th>
                                        <th>Action</th>
                                    </tr>
                                    
                                    { !includeProducts ? (
                                        <Loader />
                                    ) : (
                                        includeProducts.map((product) => ( 
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
