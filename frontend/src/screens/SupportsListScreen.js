import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

const SupportsListScreen = () => {
    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Supports List</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Client Name</th>
                                    <th>Plan</th>
                                    <th>Issue</th>
                                    <th>Date created</th>
                                    <th>Priority</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Platinum</td>
                                    <td>Plan Issue</td>
                                    <td>22/06/2021</td>
                                    <td>Low</td>
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John Smith</td>
                                    <td>Gold</td>
                                    <td>Plan Issue</td>
                                    <td>02/02/2021</td>
                                    <td>Low</td>
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>John Smith</td>
                                    <td>Silver</td>
                                    <td>Plan Issue</td>
                                    <td>21/03/2021</td>
                                    <td>Meduim</td>
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>John Smith</td>
                                    <td>Silver</td>
                                    <td>Plan Issue</td>
                                    <td>22/06/2021</td>
                                    <td>High</td>
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
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

export default SupportsListScreen
