import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function Settings() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Settings</span>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default Settings
