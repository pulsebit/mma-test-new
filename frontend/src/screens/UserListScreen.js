import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

const UserListScreen = () => {
    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>User List</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th className="email">Email</th>
                                    <th className="status">Status</th>
                                    <th className="plan">Plan</th>
                                    <th className="prename">First Name</th>
                                    <th className="surname">Last Name</th>
                                    <th className="date">Date</th>
                                    <th className="action">Action</th>
                                </tr>				
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink> 
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
                                    <td>
                                        <NavLink to='/admin/users/:id' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="email">user@gmail.com</td>
                                    <td className="status">Active</td>
                                    <td className="plan">Trainee</td>
                                    <td className="prename">John</td>
                                    <td className="surname">Smith</td>
                                    <td className="date">5 March 2021</td>
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

export default UserListScreen
