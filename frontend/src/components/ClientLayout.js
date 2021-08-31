import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails }  from '../actions/userActions'
import { Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import ClientSidebar from './ClientSidebar'
import ProfileImage from '../assets/images/user.png'
import Loader2 from '../components/Loader2'

const ClientLayout = ({ children }) => {
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo = {} } = userLogin || {}
    const userID = userInfo._id

    const { loading, user = {} } = useSelector(state => state.userDetails)

    useEffect(() => {
        dispatch(getUserDetails(userID))
     }, [dispatch])

    return (
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
    )
}

export default ClientLayout
