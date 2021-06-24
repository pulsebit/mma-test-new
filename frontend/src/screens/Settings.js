import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

const Settings = () => {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Settings</span>
                </div>
                Settings
    - Admin email
    - Site Title
    - Site description
    - Default Logo
    - default role when register
         - customer
         - subscriber
         - admin
            </DashboardContainer>
        </div>
    );
}

export default Settings
