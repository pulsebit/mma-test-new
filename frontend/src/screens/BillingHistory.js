import React from 'react'

import BillingLayout from '../components/BillingLayout'

const BillingHistory = () => {
    return (
        <div className="billing-history">
            <BillingLayout>
                <div className="table-wrapper def-padding">
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Card Number</th>
                                <th>Payment Method</th>
                                <th>Name or Plan</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>				
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Stripe</td>
                                <td>Platinum</td>
                                <td>$35.25</td>
                                <td>Paid</td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Paypal</td>
                                <td>Premuim</td>
                                <td>$35.25</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>American Express</td>
                                <td>Gold</td>
                                <td>$35.25</td>
                                <td>Pending</td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Paypal</td>
                                <td>Premuim</td>
                                <td>$35.25</td>
                                <td>Paid</td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>American Express</td>
                                <td>Premuim</td>
                                <td>$35.25</td>
                                <td>Paid</td>
                            </tr>
                            <tr>
                                <td>12/30/19</td>
                                <td>4035 5010 0000 0008</td>
                                <td>Stripe</td>
                                <td>Silver</td>
                                <td>$35.25</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </BillingLayout>
        </div>
    )
}

export default BillingHistory
