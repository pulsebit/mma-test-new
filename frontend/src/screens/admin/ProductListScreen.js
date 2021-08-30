import React, { useEffect } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import { NavLink } from 'react-router-dom'
import { listProducts } from '../../actions/productActions'

import DashboardContainer from '../../components/DashboardContainer'
import { faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Product List</div>
                        <NavLink to="/admin/product-add" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/>Add new</NavLink>
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
                                            <NavLink to={`/admin/product/${product._id}/`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                            <button className="delete-icon-btn"><FontAwesomeIcon icon={faTrash}/></button>
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
