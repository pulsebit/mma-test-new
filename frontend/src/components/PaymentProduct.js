import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paymentPlanAddProduct } from '../actions/paymentPlanAction'
import { listProducts } from '../actions/productActions'


import { Row, Col } from 'react-bootstrap'

import Loader from '../components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'


const PaymentProduct = ({id, includeProducts, isAdmin}) => {
    const dispatch = useDispatch()

    const [tempProduct, setTempProduct] = useState('')

    const { products } = useSelector( state => state.productList)

    const ProductList = () => {

        if (isAdmin == true ) {
            return (
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
            )  
        } else {
            return (
                <></>
            )
        }
    }

    const IncludedProducts = () => {

        if (isAdmin == true ) {
            return (
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
                                                <button className='delete-icon-btn'><FontAwesomeIcon icon={faTrash}/></button>  
                                            </div>  
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div> 
            )  
        } else {
            return (
                <div className="table-wrapper def-padding">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Date Added</th>
                            </tr>
                            
                            { !includeProducts ? (
                                <Loader />
                            ) : (
                                includeProducts.map((product) => ( 
                                    <tr key={product._id}>
                                        <td>{product.name}</td>
                                        <td>${product.price}</td>
                                        <td>{product.createdAt}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div> 
            )
        }
    }

    
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
                <div className="dashboard-title-wrapper">
                    <div className="dashboard-title">Products Included</div>
                        <ProductList />
                </div>
                <Row>
                    <Col md={12}>
                        <IncludedProducts />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default PaymentProduct
