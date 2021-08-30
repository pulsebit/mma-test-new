import React from 'react'
import BillingLayout from '../../components/BillingLayout'
import { NavLink } from 'react-router-dom'

const PaymentMethod = () => {
    return (
        <div>
            <BillingLayout>
                <div className="table-wrapper def-padding">
                    <NavLink to='/add-payment-method'>+ Add New Card</NavLink>
                    <table>
                        <tbody>
                            <tr>
                                <th>Card Number</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>				
                            <tr>
                                <td>4035 5010 0000 0008</td>
                                <td>04/19/22</td>
                                <td>In Use</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BillingLayout>
        </div>
    )
}

export default PaymentMethod
