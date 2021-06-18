import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function PermissionsScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Permissions</span>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default PermissionsScreen
