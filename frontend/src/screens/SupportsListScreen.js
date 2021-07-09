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
                                    <th>Ticket ID</th>
                                    <th>Client Name</th>
                                    <th>Issue</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Date created</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Plan Issue</td>
                                    <td>High</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Plan Issue</td>
                                    <td>Low</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Plan Issue</td>
                                    <td>Medium</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Plan Issue</td>
                                    <td>Medium</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Plan Issue</td>
                                    <td>Medium</td>
                                    <td>Close</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/admin/supports/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Smith</td>
                                    <td>Plan Issue</td>
                                    <td>High</td>
                                    <td>Close</td>
                                    <td>22/06/2021</td>
                                    
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
