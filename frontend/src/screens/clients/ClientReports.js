import React, { useEffect } from 'react'
import ClientLayout from '../../components/ClientLayout'
import Iframe from 'react-iframe'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../actions/userActions'

const ClientReports = () => {
    const dispatch = useDispatch()
  
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo = {} } = userLogin || {}
    const userID = userInfo._id

    const { loading, user = {} } = useSelector(state => state.userDetails)
    console.log(user)

    useEffect(() => {
        dispatch(getUserDetails(userID))
     }, [dispatch])

    return (
        <div>
            {/* https://datastudio.google.com/embed/reporting/a51cf116-e2a4-4b8e-a0b9-9a42bdd8bc18/page/1M */}
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Data Studio</div>
                    </div>
                    <div className="data-studio-wrapper">
                        <Iframe url={user.dataStudioLink}
                            width="100%"
                            height="500px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
                    </div>

                </div>
            </ClientLayout>
        </div>
    )
}
export default ClientReports
