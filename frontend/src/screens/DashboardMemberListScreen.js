import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function DashboardMemberListScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div class="member-data">
                    <table>
                        <tr>
                            <th className="email">Email</th>
                            <th className="status">Status</th>
                            <th className="plan">Plan</th>
                            <th className="prename">Prename</th>
                            <th className="surname">Surname</th>
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
                                <NavLink to='/user-edit'>
                                    <input type="submit" value="View"  className="view-btn"/>
                                </NavLink>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
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
                                <input type="submit" value="View"  className="view-btn"/>
                                <input type="submit" value="Delete" className="delete-btn"/>
                            </td>
                        </tr>
                    </table>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default DashboardMemberListScreen
