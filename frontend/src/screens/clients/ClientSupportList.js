import React from 'react'
import { NavLink } from 'react-router-dom'

import ClientLayout from '../../components/ClientLayout'

const ClientSupportList = () => {
    return (
        <div> 
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Supports List</span>
                        <div className="button-wrapper">
                            <NavLink to="/portal/add-support/" className="add-btn">Add</NavLink>
                        </div>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Ticket ID</th>
                                    <th>Issue</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Date created</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td>1</td>
                                    
                                    <td>Plan Issue</td>
                                    <td>High</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/portal/support/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    
                                    <td>Plan Issue</td>
                                    <td>Low</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/portal/support/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    
                                    <td>Plan Issue</td>
                                    <td>Medium</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/portal/support/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    
                                    <td>Plan Issue</td>
                                    <td>Medium</td>
                                    <td>Open</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/portal/support/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    
                                    <td>Plan Issue</td>
                                    <td>Medium</td>
                                    <td>Close</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/portal/support/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    
                                    <td>Plan Issue</td>
                                    <td>High</td>
                                    <td>Close</td>
                                    <td>22/06/2021</td>
                                    
                                    <td>
                                        <NavLink to='/portal/support/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ClientLayout>
        </div>
    );
}

export default ClientSupportList
