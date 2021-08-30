import React from 'react'
import BillingLayout from '../../components/BillingLayout'
import { NavLink } from 'react-router-dom'

const Purchases = () => {
    return (
        <div>
            <BillingLayout>
                <div className="table-wrapper def-padding">
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Card Number</th>
                                <th>Item</th>
                                <th>Due Date</th>
                                <th>Price</th>
                                <th>Receipt</th>
                            </tr>				
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Gold</td>
                                <td>12/30/22</td>
                                <td>$45.5</td>
                                <td>
                                    <NavLink to='/' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Silver</td>
                                <td>12/30/22</td>
                                <td>$45.5</td>
                                <td>
                                    <NavLink to='/' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Premuim</td>
                                <td>12/30/22</td>
                                <td>$45.5</td>
                                <td>
                                    <NavLink to='/' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Gold</td>
                                <td>12/30/22</td>
                                <td>$45.5</td>
                                <td>
                                    <NavLink to='/' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Silver</td>
                                <td>12/30/22</td>
                                <td>$45.5</td>
                                <td>
                                    <NavLink to='/' className="view-btn">View</NavLink>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BillingLayout>
        </div>
    )
}

export default Purchases
