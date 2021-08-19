import React from 'react'
import { NavLink } from 'react-router-dom'


const ClientServicesTab = ({children}) => {
    return (
        <nav className="nav-tab">
            <span>Available Plans</span>
            <ul>
                <li><NavLink to='/portal/services/basic' >Basic</NavLink></li>
                <li><NavLink to='/portal/services/silver' >Silver</NavLink></li>
                <li><NavLink to='/portal/services/gold' >Gold</NavLink></li>
                <li><NavLink to='/portal/services/platinum' >Platinum</NavLink></li>
            </ul>
        </nav>
    )
}
export default ClientServicesTab
