import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import ClientLayout from '../../components/ClientLayout'

import { getAccessListByCreator } from '../../actions/accessAction'
import { Col, Row } from 'react-bootstrap'
import { SiFacebook, SiInstagram, SiGoogleanalytics, SiShopify, SiCodewars } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import { BsQuestionCircleFill } from "react-icons/bs";




const ClientAccess = () => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userLogin)
    const creatorId = userInfo._id
    const accessListByCreator = useSelector( state => state.accessListByCreator)
    const { loading, error, accesses} = accessListByCreator

    useEffect(() => {
        dispatch(getAccessListByCreator(creatorId))
    },[dispatch, creatorId])


    const DisplayIcon = (type) => {
        if (type === 'Website') {
            return <BiWorld />
        } else if (type === 'CRM') {
            return <SiCodewars />
        } else if (type === 'Shopify') {
            return <SiShopify />
        } else if (type === 'Google Analytics') {
            return <SiGoogleanalytics />
        } else if (type === 'Facebook') {
            return <SiFacebook />
        } else if (type === 'Instagram') {
            return <SiInstagram />
        } else {
            return <BsQuestionCircleFill />
        }
        console.log(type)
    }

    return (
        <div className="client-access"> 
            <ClientLayout >
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Email Supports</div>
                        <div className="button-wrapper">
                            <NavLink to="/portal/access-add/" className="add-btn">Add New</NavLink>
                        </div>
                    </div>
                    <div className="accesses-wrapper">
                        <Row>
                            {accesses.map((access) => (
                                <Col md={3}>
                                    <NavLink to={`/portal`} className="inner-wrapper">
                                        <div className="access">
                                            <div className="icon-wrapper">
                                                <DisplayIcon type={access.type}/>
                                            </div>
                                            <div className="detail-wrapper">
                                                <label>Type:</label>
                                                <span>{access.type}</span>
                                            </div>
                                            <div className="detail-wrapper">
                                                <label>URL:</label>
                                                <span>{access.url}</span>
                                            </div>
                                            <div className="detail-wrapper">
                                                <label>Login URL:</label>
                                                <span>{access.loginUrl}</span>
                                            </div>
                                            <div className="detail-wrapper">
                                                <label>Username:</label>
                                                <span>{access.username}</span>
                                            </div>
                                            <div className="detail-wrapper">
                                                <label>Password:</label>
                                                <span>{access.password}</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </ClientLayout>
        </div>
    );
}

export default ClientAccess
