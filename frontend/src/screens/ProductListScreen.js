import React, { useEffect } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { NavLink } from 'react-router-dom'
import { listProducts } from '../actions/productActions'

import DashboardContainer from '../components/DashboardContainer'

const ProductListScreen = () => {
    // const dispatch = useDispatch()
    
    // const { productList } = useSelector(state => state.productList)
    // const {loading, error, products } = productList
    
    // useEffect(() => {
    //      dispatch(listProducts())
    // },[dispatch])

    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Product List</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Product Name</th>
                                    <th>SKU</th>
                                    <th>Date added</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td>2</td>
                                    <td>SEO</td>
                                    <td>A123</td>
                                    <td>11/22/2021</td>
                                    <td>599 AUD</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Web development</td>
                                    <td>B456</td>
                                    <td>11/22/2021</td>
                                    <td>599 AUD</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>FB ads</td>
                                    <td>C4RF3</td>
                                    <td>11/22/2021</td>
                                    <td>599 AUD</td>
                                    <td>
                                        <NavLink to='/admin/product/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default ProductListScreen
