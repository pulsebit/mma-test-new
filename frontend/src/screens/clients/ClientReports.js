import React, { useEffect } from 'react'
import ClientLayout from '../../components/ClientLayout'
import Iframe from 'react-iframe'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../actions/userActions'

const ClientReports = () => {
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo = {} } = userLogin || {}
    const { _id = {} } = userInfo || {}
    const userID = _id

    const { loading, user = {} } = useSelector(state => state.userDetails)
    console.log(user)

    useEffect(() => {
        dispatch(getUserDetails(userID))
     }, [dispatch])

    return (
        <div>
            <ClientLayout>
                <div className="box-shadow-alone">
                    <Iframe 
                        url={user.dataStudioLink}
                        width="100%"
                        height="750px"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative"
                    />
                </div>
            </ClientLayout>
                
        </div>
    )
}
export default ClientReports
