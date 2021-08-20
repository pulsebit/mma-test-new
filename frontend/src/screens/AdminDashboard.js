import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listUsers }  from '../actions/userActions'
import { listSupports } from '../actions/supportActions'
import { listProducts } from '../actions/productActions'
import { listPaymentPlans } from '../actions/paymentPlanAction'

import { Row , Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import DashboardContainer from '../components/DashboardContainer'
import Loader2 from '../components/Loader2'



import Chart from '../assets/images/chart.png'
import PieChart from '../assets/images/pie-chart.png'
import Chart2 from  '../assets/images/chart2.jpg'
import LineChart from '../components/LineChart'
import Layout from 'components/Layout'

const AdminDashboard = () => {
    const dispatch = useDispatch()

    const { users = {} } = useSelector( state => state.userList)
    const countUsers = users.length

    const { supports = {} } = useSelector( state => state.supportList)
    const countSupports = supports.length

    const { products = {} } = useSelector( state => state.productList)
    const countProducts = products.length

    const { paymentPlans = {} } = useSelector(state => state.paymentPlanList)
    const  countPaymentPlans= paymentPlans.length

    useEffect(() => {
        dispatch(listUsers())
        dispatch(listSupports())
        dispatch(listProducts()) 
        dispatch(listPaymentPlans())
         
    }, [dispatch])
    
    return (
        <div> 
            <Layout>
                <div className="c-mar-side-neg-15">
                    <Row>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Clients</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">
                                        { !countUsers ? (
                                            <Loader2 />
                                        ) : (
                                            countUsers
                                        ) }
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Supports</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">
                                        { !countSupports ? (
                                            <Loader2 />
                                        ) : (
                                            countSupports
                                        ) }
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Products</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">
                                        { !countProducts ? (
                                            <Loader2 />
                                        ) : (
                                            countProducts
                                        ) }
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Total Payment Plans</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">
                                        { !countPaymentPlans ? (
                                            <Loader2 />
                                        ) : (
                                            countPaymentPlans
                                        ) }
                                    </span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Tickets</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="section-wrapper">
                                <div className="blue-bkg-title def-padding">
                                    <span>Knowledge base</span>
                                </div>
                                <div className="content-wrapper def-padding">
                                    <span className="number">1,054</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                    
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Recent Activities</span>
                        </div>
                        <div className="admin-dashboard def-padding">
                            <Row>
                            <Col md={12}>
                                <div className="content-wrapper">
                                    <div className="activity-wrapper">
                                        <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                            <div className="activiy-item">
                                                <div className="time">3 mins ago</div>
                                                <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>
                                                <h6>Name Updated</h6>
                                                <h6>July</h6><span>updated a task</span> 
                                            </div> 
                                        </div>                             
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
            </Layout>
        </div>
    );
}

export default AdminDashboard
