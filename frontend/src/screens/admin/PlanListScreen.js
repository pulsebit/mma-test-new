import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader2 from '../../components/Loader2'
import DashboardContainer from '../../components/DashboardContainer'
import { listPaymentPlans } from '../../actions/paymentPlanAction'
import date from 'date-and-time'
import { faEye, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                    <div className="dashboard-title-wrapper">
                        <div className="dashboard-title">Payment Plans</div>
                        <NavLink to="/admin/plan-add" className="add-btn"><FontAwesomeIcon icon={faPlusSquare}/>Add New</NavLink>
                    </div>
                    <div className="table-wrapper def-padding">
                        <table>
                        { loading ? ( 
                            <Loader2 /> 
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
                                            <NavLink to={`/admin/plan/${payment._id}`} className="view-icon-btn"><FontAwesomeIcon icon={faEye}/></NavLink>
                                                <button className="delete-icon-btn"><FontAwesomeIcon icon={faTrash}/></button>
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
