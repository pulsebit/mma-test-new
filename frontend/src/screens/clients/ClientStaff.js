import React from 'react'
import { NavLink } from 'react-router-dom'
import ClientLayout from '../../components/ClientLayout'

const ClientStaff = () => {
    return (
        <div>
            <ClientLayout>
               
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>All Staff</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Action</th>
                                </tr>				
                                <tr>
                                    <td>2</td>
                                    <td>John Doe</td>
                                    <td>john@mma.com</td>
                                    <td>Level</td>
                                    <td>
                                        <NavLink to='/portal/view-staff/' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John Doe</td>
                                    <td>john@mma.com</td>
                                    <td>Level</td>
                                    <td>
                                        <NavLink to='/portal/view-staff/' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>John Doe</td>
                                    <td>john@mma.com</td>
                                    <td>Level</td>
                                    <td>
                                        <NavLink to='/portal/view-staff/' className="view-btn">View</NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </ClientLayout>
        </div>
    )
}
export default ClientStaff