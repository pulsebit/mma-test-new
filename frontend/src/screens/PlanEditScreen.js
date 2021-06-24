import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

import '../styles/plan.css'

const PlanEditScreen = () => {
    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Plan List</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Current subscribers</th>
                                    <th>Price</th>
                                    <th>action</th>
                                </tr>				
                                <tr>
                                    <td>Gold</td>
                                    <td>3000 AUD</td>
                                    <td>3000 AUD</td>
                                    <td>3000 AUD</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Silver</td>
                                    <td>3000 AUD</td>
                                    <td>3000 AUD</td>
                                    <td>3000 AUD</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Platinum</td>
                                    <td>3000 AUD</td>
                                    <td>3000 AUD</td>
                                    <td>3000 AUD</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
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

export default PlanEditScreen
