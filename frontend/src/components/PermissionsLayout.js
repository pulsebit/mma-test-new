import React from 'react'
import { NavLink } from 'react-router-dom'
import DashboardContainer from './DashboardContainer'


const PermissionsLayout = ({ children }) => {
    return (
        <div className="view-screen">
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Administration Role</span>
                        <button type="submit" value="Edit" className='add-btn'>Add New</button>
                    </div>
                        <ul className="per-menu def-padding">
                            <li><NavLink to="/admin/permissions/all">All</NavLink></li>
                            <li><NavLink to="/admin/permissions/super-admin">Super Admin</NavLink></li>
                            <li><NavLink to="/admin/permissions/other">Other Admin</NavLink></li>
                        </ul>
                    <div className="table-wrapper def-padding">
                        { children }
                    </div>
               </div>
                    
            </DashboardContainer>
        </div>
    )
}
export default PermissionsLayout