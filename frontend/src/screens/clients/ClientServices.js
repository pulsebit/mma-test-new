import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPaymentPlans } from '../../actions/paymentPlanAction'
import ClientLayout from '../../components/ClientLayout'
import Loader2 from '../../components/Loader2'
import Message from '../../components/Message'
import date from 'date-and-time'
import { NavLink } from 'react-router-dom'

const ClientServices = () => {
    const dispatch = useDispatch()
    
    const paymentPlanList = useSelector(state => state.paymentPlanList)
    const { loading, paymentPlans, error } = paymentPlanList

    useEffect(() => {
        dispatch(listPaymentPlans())
    },[dispatch])
    
    return (
        <div className="view-screen">
            <ClientLayout>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Services</span>
                    </div>

                    <h3>No Plan Registered</h3>

                    <div className="table-wrapper def-padding">
                        <h3>Available Plans</h3>
                        <table>
                        { loading ? ( 
                            <Loader2 /> 
                        ) : error ? ( 
                            <Message variant='danger'>{error}</Message>
                        ) : (
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Date Created</th>
                                    <th>Last Update</th>
                                    <th>Action</th>
                                    
                                </tr>
                                {paymentPlans.map((payment) => (
                                    <tr key={payment._id}>
                                        <td>{payment.name}</td>
                                        <td>${payment.price}</td>
                                        <td>{date.format(new Date(payment.createdAt), 'ddd, MMM DD YYYY')}</td>
                                        <td>{date.format(new Date(payment.updatedAt), 'ddd, MMM DD YYYY')}</td>
                                        <td>
                                            <NavLink to={`/portal/services/${payment._id}`} className="">View</NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            )}
                        </table>
                    </div>
                </div>
            </ClientLayout>
        </div>
    )
}

export default ClientServices
