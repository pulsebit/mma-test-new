import React, { useEffect, useState } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import { NavLink } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'
import { useDispatch, useSelector } from 'react-redux'
import defaultImage from '../assets/images/user.png'
import { getPaymentPlanDetails, updatePaymentPlan, deletePaymentPlan } from '../actions/paymentPlanAction'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { PAYMENTPLAN_UPDATE_RESET }  from '../constants/paymentPlanConstant'

const PlanEditScreen = ({ match, history }) => {
    const paymentPlanId = match.params.id
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [subscribers, setSubcribers] = useState('')
    const [createdAt, setDate] = useState('')

    const paymentPlanDetails = useSelector(state => state.paymentPlanDetails)
    const { loading, paymentPlan, error } = paymentPlanDetails

    const paymentPlanUpdate = useSelector(state => state.paymentPlanUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = paymentPlanUpdate


    const paymentPlanDelete = useSelector(state => state.paymentPlanDelete)
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = paymentPlanDelete

    const productList = useSelector( state => state.productList)
    const { products } = productList


    useEffect(() => {
        if(successUpdate || successDelete) {
            dispatch({ type: PAYMENTPLAN_UPDATE_RESET})
            history.push('/admin')  
        } 
        else {
            if( !paymentPlan.name || paymentPlan._id !== paymentPlanId) {
                dispatch(getPaymentPlanDetails(paymentPlanId))
            } else {
                setName(paymentPlan.name)
                setPrice(paymentPlan.price)
                setImage(paymentPlan.image)
                setDescription(paymentPlan.description)
                setFeatures(paymentPlan.features)
                setSubcribers(paymentPlan.subscribers)
                setDate(paymentPlan.createdAt)
            }
        }
        dispatch(listProducts())
    }, [dispatch, paymentPlanId, paymentPlan, match, history, successUpdate, successDelete])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePaymentPlan({ _id: paymentPlanId, name, price, image, description, features}))
        
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deletePaymentPlan(paymentPlanId))
    }

    


    return (
        <div className="edit-screen">
            <DashboardContainer>
                <Form onSubmit={onSubmitHandler}>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Payment Information</span>
                        </div>
                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <div className="inner-img-wrapper ">
                                        <img className="" src={defaultImage} alt='' />
                                    </div>
                                </div>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>ID:</label>
                                                <span><input type="text" value={paymentPlanId} readOnly/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price</label>
                                                <span><input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Created: </label>
                                                <span><input type="text" value={createdAt} readOnly/></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details">
                                    <div className="details-wrapper">
                                        <label>Description:</label>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data= {description}
                                            onReady={ editor => {
                                            } }
                                            onChange={(e, editor)=>{
                                                const data = editor.getData();
                                                setDescription(data)
                                                console.log(setDescription);
                                            }}
                                            onBlur={ ( event, editor ) => {
                                                console.log( 'Blur.', editor );
                                            } }
                                            onFocus={ ( event, editor ) => {
                                                console.log( 'Focus.', editor );
                                            } }
                                        />
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Features:</label>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data= {features}
                                            onReady={ editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log( 'Editor is ready to use!', editor );
                                            } }
                                            onChange={(e, editor)=>{
                                                const data = editor.getData();
                                                setFeatures(data)
                                                console.log(setFeatures);
                                            }}
                                            onBlur={ ( event, editor ) => {
                                                console.log( 'Blur.', editor );
                                            } }
                                            onFocus={ ( event, editor ) => {
                                                console.log( 'Focus.', editor );
                                            } }
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <div className="button-wrapper def-padding">
                            <button type="submit" value="Update" className='update-btn'>Update</button>
                            <button onClick={onDeleteHandler} className='delete-btn'>Delete</button>
                            <NavLink to={`/admin/plan/${paymentPlanId}`}>Cancel</NavLink>
                        </div>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Products Included</span>
                            
                            <div className="button-wrapper">
                                <select name="listproducts" id="listproducts" multiple>
                                    {products.map((product) => (
                                        <option value={product._id}>{product.name}</option>
                                    ))}
                                </select>
                                <button type="submit" className='add-btn'>Add New</button>
                            </div>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Short Description</th>
                                                <th>Price</th>
                                                <th>Date Added</th>
                                                <th>Action</th>
                                            </tr>				
                                            <tr>
                                                <td><input type="text>"/></td>
                                                <td><input type="text>"/></td>
                                                <td><input type="text>"/></td>
                                                <td><input type="text>"/></td>
                                                <td>
                                                    <div className="button-wrapper">
                                                        <button className='delete-btn'>Delete</button>  
                                                    </div>  
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>

                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Subcribers</span>
                            <button type="submit" value="Add" className='add-btn'>Add New</button>
                        </div>
                        <Row>
                            <Col md={12}>
                                <div className="table-wrapper def-padding">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile Number</th>
                                                <th>Date Added</th>
                                                <th>Date Due</th>
                                                <th>Action</th>
                                            </tr>				
                                            <tr>
                                                <td>John Smith</td>
                                                <td>john@mma.com</td>
                                                <td>+61 7 7010 1111</td>
                                                <td>2/3/2021</td>
                                                <td>2/3/2021</td>
                                                <td>
                                                <div className="button-wrapper">
                                                    <NavLink to="/admin/product/:id/edit" className="edit-btn">Edit</NavLink>
                                                    <button className='delete-btn'>Delete</button>  
                                                </div>  
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                </Form>
            </DashboardContainer>
        </div>
    );
}

export default PlanEditScreen
