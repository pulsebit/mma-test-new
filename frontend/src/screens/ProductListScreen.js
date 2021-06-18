import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

import '../styles/product.css'

function ProductListScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                <span>Product List</span>
            </div>
                <div className="product-list-wrapper">
                <table>
                    <tbody>
                        <tr>
                            <th>SKU</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>				
                        <tr>
                            <td>A123</td>
                            <td>SEO</td>
                            <td>599 AUD</td>
                            <td>Short description here</td>
                            <td>
                                <NavLink to='/user-view' className="view-btn">View</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>B456</td>
                            <td>Web development</td>
                            <td>599 AUD</td>
                            <td>Short description here</td>
                            <td>
                                <NavLink to='/user-view' className="view-btn">View</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td>C4RF3</td>
                            <td>FB ads</td>
                            <td>599 AUD</td>
                            <td>Short description here</td>
                            <td>
                                <NavLink to='/user-view' className="view-btn">View</NavLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </DashboardContainer>
        </div>
    );
}

export default ProductListScreen
