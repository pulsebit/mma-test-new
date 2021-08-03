import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import DashboardContainer from '../components/DashboardContainer'
import { listPaymentPlans } from '../actions/paymentPlanAction'
import date from 'date-and-time'


const PlanListScreen = () => {
    const dispatch = useDispatch()
    
    const paymentPlanList = useSelector(state => state.paymentPlanList)
    const { loading, paymentPlans, error } = paymentPlanList

    useEffect(() => {
        dispatch(listPaymentPlans())
    },[dispatch])

    return (
        <div> 
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Payment Plans</span>
                        <NavLink to="/admin/plan-add" className="add-btn">Add new</NavLink>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                        { loading ? ( 
                            <Loader /> 
                        ) : error ? ( 
                            <Message variant='danger'>{error}</Message>
                        ) : (
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Current Subcribers</th>
                                    <th>Price</th>
                                    <th>Date Created</th>
                                    <th>Last Update</th>
                                    <th>Action</th>
                                    
                                </tr>
                               {paymentPlans.map((payment) => (
                                   <tr>
                                        <td>{payment.name}</td>
                                        <td>{payment.subscribers}</td>
                                        <td>${payment.price}</td>
                                        <td>{date.format(new Date(payment.createdAt), 'ddd, MMM DD YYYY')}</td>
                                        <td>{date.format(new Date(payment.updatedAt), 'ddd, MMM DD YYYY')}</td>
                                        <td>
                                            <NavLink to={`/admin/plan/${payment._id}`} className="view-btn">View</NavLink>
                                        </td>
                                    </tr>
                               ))}
                            </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </DashboardContainer>
        </div>
    )
}



export default PlanListScreen
