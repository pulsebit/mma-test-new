import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function UserListScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>User List</span>
                </div>
                <div class="member-data">
                    <div className="table-wrapper">
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink> 
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink> 
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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
                                        <NavLink to='/user-view' className="view-btn">View</NavLink>
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

export default UserListScreen
