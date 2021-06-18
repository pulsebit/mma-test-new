import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

import '../styles/plan.css'

function ProductListScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Plan List</span>
                </div>
                <div className="plan-list-wrapper">
                    <table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>				
                            <tr>
                                <td>Gold</td>
                                <td>3000 AUD</td>
                                <td>
                                    <NavLink to='/user-view' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>Silver</td>
                                <td>3000 AUD</td>
                                <td>
                                    <NavLink to='/user-view' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>Platinum</td>
                                <td>3000 AUD</td>
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
