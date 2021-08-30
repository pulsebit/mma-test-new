import React from 'react'
import { Container} from 'react-bootstrap'
import Sidebar from './Sidebar'

const AdminDashboard = ({ children }) => {
    return (
        <div className="dashboard-container">
            <div className='dashboard'>
                <div className="sidebar def-padding">
                    <Sidebar />
                </div>
                <div className="main-content">
                    <div className="member-list-wrapper">
                        <div className="main-data">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
