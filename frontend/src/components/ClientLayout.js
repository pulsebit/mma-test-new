import React, { useEffect } from 'react'
import { Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationArrow, faPhone, faUsers } from '@fortawesome/free-solid-svg-icons'
import ClientSidebar from './ClientSidebar'
import ProfileImage from '../assets/images/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../actions/userActions'

const ClientLayout = ({ children }) => {
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo} = userLogin

    const { user = {} } = useSelector(state => state.userDetails)

    useEffect(() => {
        dispatch(getUserDetails(userInfo._id))
     }, [dispatch])

    return (
        <div className="client-layout">
            <Container fluid>
            <div className='layout'>
                <div className="sidebar def-padding">
                    <div className="res-sidebar">
                        <ClientSidebar />
                    </div>
                    <div className="basic-info">
                        <div className="inner-img-wrapper">
                            <img className="" src={ProfileImage} alt='' />
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
            </Container>
        </div>
    )
}

export default ClientLayout
