import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function MemberListScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Dashboard</span>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default MemberListScreen
