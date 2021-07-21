import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import DashboardContainer from '../components/DashboardContainer'
import { listPaymentPlans } from '../actions/paymentPlanAction'


const PlanListScreen = () => {
    const dispatch = useDispatch()
    const paymentList = useSelector(state => state.paymentList)
    const { loading, paymentPlans, error } = paymentList

    useEffect(() => {
        dispatch(listPaymentPlans())
    },[dispatch])

    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Payment Plans</span>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Current Subcribers</th>
                                    <th>Price</th>
                                    <th>action</th>
                                </tr>
                                { loading ? ( 
                                    <Loader /> 
                                ) : error ? ( 
                                    <Message variant='danger'>{error}</Message>
                                ) : ( paymentPlans.map(payment => (
                                    <tr>
                                        <td>{payment._id}</td>
                                        <td>{payment.name}</td>
                                        <td>{payment.subscribers}</td>
                                        <td>{payment.price}</td>
                                        <td>
                                            <NavLink to={`/admin/plan/${payment._id}`} className="view-btn">View</NavLink>
                                        </td>
                                    </tr>
                                )))}
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    )
}

export default PlanListScreen
