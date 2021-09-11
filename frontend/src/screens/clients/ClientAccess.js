import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import ClientLayout from '../../components/ClientLayout'

import { getAccessListByCreator } from '../../actions/accessAction'
import { SiFacebook, SiInstagram, SiGoogleanalytics, SiShopify, SiCodewars } from "react-icons/si";
import date from 'date-and-time'





const ClientAccess = () => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector(state => state.userLogin)
    const creatorId = userInfo._id
    const accessListByCreator = useSelector( state => state.accessListByCreator)
    const { loading, error, accesses} = accessListByCreator

    useEffect(() => {
        dispatch(getAccessListByCreator(creatorId))
    },[dispatch, creatorId])

    // const Item = ({info}) => {
    //     var icon = ""
    //     var cl = ""
    //     if (info.type === 'Website') {
    //         cl = 'website'
    //         icon = <BiWorld />
    //     } else if (info.type === 'CRM') {
    //         cl = 'crm'
    //         icon = <SiCodewars />
    //     } else if (info.type === 'Shopify') {
    //         cl = 'shopify'
    //         icon = <SiShopify />
    //     } else if (info.type === 'Google Analytics') {
    //         cl = 'google-analytics'
    //         icon = <FcGoogle />
    //     } else if (info.type === 'Facebook') {
    //         cl = 'facebook'
    //         icon = <SiFacebook />
    //     } else if (info.type === 'Instagram') {
    //         cl = 'instagram'
    //         icon = <SiInstagram />
    //     } else {
    //         cl = 'not-define'
    //         icon = <BsQuestionCircleFill />
    //     }

    //     return (
    //         <>
    //         <div className={`access ${cl}`}>
    //             <div className='icon-wrapper'>
    //                 {icon}
    //                 <span>{info.type}</span>
    //             </div>
    //             <div className="detail-wrapper">
    //                 <label>URL</label>
    //                 <span>{info.url}</span>
    //             </div>
    //             <div className="detail-wrapper">
    //                 <label>Login URL</label>
    //                 <span>{info.loginUrl}</span>
    //             </div>
    //             <div className="detail-wrapper">
    //                 <label>Username</label>
    //                 <span>{info.username}</span>
    //             </div>
    //             <div className="detail-wrapper">
    //                 <label>Password</label>
    //                 <span>{info.password}</span>
    //             </div>
    //         </div>
    //         </>
    //     )

    // }



    return (
        <div className="client-access"> 
            <ClientLayout >
                <div className="section-wrapper">
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Accesses</div>
                        <div className="button-wrapper">
                            <NavLink to="/portal/access-add/" className="add-btn">Add New</NavLink>
                        </div>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <th>URL</th>
                                    <th>Login URL</th>
                                    <th>Date Created</th>
                                    <th>Action</th>
                                </tr>		   
                                {accesses.map((access) => (
                                    <tr key={access._id}>
                                        <td>{access.type}</td>
                                        <td>{access.url}</td>
                                        <td>{access.loginUrl}</td>
                                        <td>{date.format(new Date(access.createdAt), 'ddd, MMM DD YYYY')}</td>
                                        
                                        <td>
                                            <NavLink to={`/portal/access/${access._id}`} className="view-btn">View</NavLink>
                                            <button className="delete-btn">Trash</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* <div className="accesses-wrapper">
                        <Row>
                            {accesses.map((access) => (
                                <Col md={3}>
                                    <NavLink to={`/portal`} className="inner-wrapper">
                                        <Item info={access} />
                                    </NavLink>
                                </Col>
                            ))}
                        </Row>
                    </div> */}
                </div>
            </ClientLayout>
        </div>
    );
}

export default ClientAccess
