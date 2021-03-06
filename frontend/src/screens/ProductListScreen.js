import React, { useEffect } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { NavLink } from 'react-router-dom'
import { listProducts } from 'store/actions/productActions'

import DashboardContainer from '../components/DashboardContainer'

const ProductListScreen = () => {

    const dispatch = useDispatch()

   const productList = useSelector( state => state.productList)
   const {loading, error, products } = productList

   useEffect(() => {
        dispatch(listProducts()) 
   }, [dispatch])


    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Product List</span>
                        <NavLink to="/admin/product-add" className="add-btn">Add new</NavLink>
                    </div>
                    <div className="table-wrapper def-padding">
                    { loading ? ( 
                        <Loader /> 
                    ) : error ? ( 
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <table>
                            <tbody>
                                <tr>
                                    <th>Product Name</th>
                                    <th>SKU</th>
                                    <th>Date added</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                {products.map((product) => (
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>A123</td>
                                        <td>{product.createdAt}</td>
                                        <td>${product.price}</td>
                                        <td>
                                            <NavLink to={`/admin/product/${product._id}/`} className="view-btn">View</NavLink>
                                        </td>
                                    </tr>
                                ))}	
                            </tbody>
                        </table>
                        )}
                    </div>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default ProductListScreen
