import React from 'react'
import { NavLink } from 'react-router-dom'

import DashboardContainer from '../components/DashboardContainer'

function CategoriesScreen() {
    return (
        <div> 
            <DashboardContainer>
                <div className="blue-bkg-title">
                    <span>Categories</span>
                </div>
            </DashboardContainer>
        </div>
    );
}

export default CategoriesScreen
