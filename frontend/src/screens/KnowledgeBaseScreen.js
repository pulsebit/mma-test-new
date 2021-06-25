import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

const KnowledgeBaseScreen = () => {
    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Categories</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Date created</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink> 
                                    </td>
                                </tr>
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink> 
                                    </td>
                                </tr>
                                <tr>
                                    <td >user@gmail.com</td>
                                    <td >Active</td>
                                    <td>Trainee</td>
                                    <td>John</td>
                                    <td>
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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

export default KnowledgeBaseScreen
