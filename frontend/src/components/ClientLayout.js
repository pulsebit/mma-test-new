import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ClientSidebar from './ClientSidebar'
import Loader2 from '../components/Loader2'
import Header from './Header'
import Footer from './Footer'

const ClientLayout = ({ children }) => {
    const dispatch = useDispatch()
    
  
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo = {} } = userLogin || {}
    const { _id = {} } = userInfo || {}
    const userID = _id  

    return (
        <>
            <Header />
            <div className="client-layout">
                <div className='layout'>
                    <div className="sidebar">
                        <div className="res-sidebar">
                            <ClientSidebar />
                        </div>
                            <div className="basic-info">
                                <div className="inner-img-wrapper">
                                    <div className="img-wrapper">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt='' />
                                    </div>
                                    <span>Company name</span>
                                    <span>Owner name</span>
                                </div>
                            </div>
                        <div className="des-sidebar">
                            <ClientSidebar />
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="layout-wrapper">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClientLayout
