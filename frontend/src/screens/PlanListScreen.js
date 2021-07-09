import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

const PlanListScreen = () => {
    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Payment Plans</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Current Subcribers</th>
                                    <th>Price</th>
                                    <th>action</th>
                                </tr>				
                                <tr>
                                    <td>01</td>
                                    <td>Gold</td>
                                    <td>300 subscribers</td>
                                    <td>20 AUD</td>
                                    <td>
                                        <NavLink to='/admin/plan/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>Silver</td>
                                    <td>300 subscribers</td>
                                    <td>20 AUD</td>
                                    <td>
                                        <NavLink to='/admin/plan/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>Platinum</td>
                                    <td>300 subscribers</td>
                                    <td>20 AUD</td>
                                    <td>
                                        <NavLink to='/admin/plan/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>Basic</td>
                                    <td>300 subscribers</td>
                                    <td>20 AUD</td>
                                    <td>
                                        <NavLink to='/admin/plan/:id' className="view-btn">View</NavLink>
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

export default PlanListScreen
