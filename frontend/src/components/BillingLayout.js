import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const BillingLayout = ({ children }) => {
    return (
        <div className="billing-layout pad-tb-60">
            <Container>
            <ul className="bill-tab">
                <li><NavLink to="/billing-history">Billing History</NavLink></li>
                <li><NavLink to="/payment-method">Payment Method</NavLink></li>
                <li><NavLink to="/purchases">Purchases</NavLink></li>
            </ul>
            
            <div className="main-content">
                { children }
            </div>
            </Container>
        </div>
    )
}

export default BillingLayout
