import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function SupportsScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Supports</span>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default SupportsScreen
