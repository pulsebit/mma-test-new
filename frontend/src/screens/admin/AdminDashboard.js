import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { listUsers }  from '../../actions/userActions'
import { listSupports } from '../../actions/supportActions'
import { listProducts } from '../../actions/productActions'
import { listPaymentPlans } from '../../actions/paymentPlanAction'

import { Row , Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faInfoCircle, faShoppingCart, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import DashboardContainer from '../../components/DashboardContainer'
import Loader2 from '../../components/Loader2'


const AdminDashboard = () => {
    const dispatch = useDispatch()

    const { users = {} } = useSelector( state => state.userList)
    const countUsers = users.length

    const { supports = {} } = useSelector( state => state.supportList)
    const countSupports = supports.length

    const { products = {} } = useSelector( state => state.productList)
    const countProducts = products.length

    const { paymentPlans = {} } = useSelector(state => state.paymentPlanList)
    const  countPaymentPlans = paymentPlans.length

    useEffect(() => {
        dispatch(listUsers())
        dispatch(listSupports())
        dispatch(listProducts()) 
        dispatch(listPaymentPlans())
         
    }, [dispatch])

    if ( !countUsers || !countSupports || !countProducts || !countPaymentPlans ) {
        return (
            <div className="adminDashboard"> 
                <DashboardContainer>
                    <Loader2 />
                </DashboardContainer>
            </div>
        )
    } else {
        return (
            <div className="adminDashboard"> 
                <DashboardContainer>
                    <div className="c-mar-side-neg-15">
                        <Row>
                            <Col md={3}>
                                <div className="section-wrapper mar-b-50">
                                    <div className="details">
                                        <div className="title-wrapper">
                                            <div className="title">
                                                <FontAwesomeIcon icon={faUsers}/>
                                                <span>Clients</span>
                                            </div>
                                            <div className="sub-title">
                                                <span>Total number of clients</span>
                                            </div>
                                        </div>
                                        <div className="total">
                                            { countUsers}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="section-wrapper mar-b-50">
                                    <div className="details">
                                        <div className="title-wrapper">
                                            <div className="title">
                                                <FontAwesomeIcon icon={faInfoCircle}/>
                                                <span>Supports</span>
                                            </div>
                                            <div className="sub-title">
                                                <span>Total number of supports</span>
                                            </div>
                                        </div>
                                        <div className="total">
                                            { countSupports}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="section-wrapper mar-b-50">
                                    <div className="details">
                                        <div className="title-wrapper">
                                            <div className="title">
                                                <FontAwesomeIcon icon={faShoppingCart}/>
                                                <span>Products</span>
                                            </div>
                                            <div className="sub-title">
                                                <span>Total number of products</span>
                                            </div>
                                        </div>
                                        <div className="total">
                                            { countProducts}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="section-wrapper mar-b-50">
                                    <div className="details">
                                        <div className="title-wrapper">
                                            <div className="title">
                                                <FontAwesomeIcon icon={faShoppingCart}/>
                                                <span>Payment Plans</span>
                                            </div>
                                            <div className="sub-title">
                                                <span>Total number of payment plans</span>
                                            </div>
                                        </div>
                                        <div className="total">
                                            { countPaymentPlans}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                        
                    <div className="section-wrapper mar-b-50">
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
                </DashboardContainer>
            </div>
        )
    }
}

export default AdminDashboard
