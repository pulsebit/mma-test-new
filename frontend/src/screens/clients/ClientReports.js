import React from 'react'
import ClientLayout from '../../components/ClientLayout'
import Iframe from 'react-iframe'

const ClientReports = () => {
    return (
        <div>
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Data Studio</span>
                    </div>
                    <div className="data-studio-wrapper">
                        <Iframe url="https://datastudio.google.com/embed/reporting/a51cf116-e2a4-4b8e-a0b9-9a42bdd8bc18/page/1M"
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
