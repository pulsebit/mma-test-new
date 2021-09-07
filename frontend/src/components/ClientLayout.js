import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails }  from '../actions/userActions'
import { Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import ClientSidebar from './ClientSidebar'
import ProfileImage from '../assets/images/user.png'
import Loader2 from '../components/Loader2'
import Header from './Header'
import Footer from './Footer'

const ClientLayout = ({ children }) => {
    const dispatch = useDispatch()
    let userID =""
  
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo = {} } = userLogin || {}
    const { _id = {} } = userInfo || {}

    const userLoginSocial = useSelector(state => state.userLoginSocial)
    const { userInfoSocial = {} } = userLoginSocial || {}

    if (userInfo) {
        userID = _id  
    } else if (userInfoSocial) {
        userID = userInfoSocial._id 
    }

    
    const { loading, user = {} } = useSelector(state => state.userDetails)

    useEffect(() => {
        dispatch(getUserDetails(userID))
     }, [dispatch])

    return (
        <>
            <Header />
            <div className="client-layout">
                <div className='layout'>
                    <div className="sidebar def-padding">
                        <div className="res-sidebar">
                            <ClientSidebar />
                        </div>
                        { loading ? (
                            <Loader2 />
                        ) : (
                            <div className="basic-info">
                                <div className="inner-img-wrapper">
                                    <div className="img-wrapper">
                                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt='' />
                                    </div>
                                    <span>{user.name}</span>
                                </div>
                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>{user.mobile_no}</span>
                        </div>

                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>{user.email}</span>
                        </div>

                        <div className="details-wrapper">
                            <FontAwesomeIcon icon={faLocationArrow} />
                            <span>{user.address}</span>
                        </div>

                                <div className="details-wrapper">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <span>100</span>
                                </div>
                                
                            </div>
                        )}
                        <div className="des-sidebar">
                            <ClientSidebar />
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="layout-wrapper pad-lr-60">
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
