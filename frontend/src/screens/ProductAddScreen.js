
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Row, Col, Form } from 'react-bootstrap'
import DashboardContainer from '../components/DashboardContainer'

import { createProduct } from '../actions/productActions'


const ProductAddScreen = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [numReviews, setNumReviews] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [paymentPlan, setPaymentPlan] = useState('')
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createProduct(name, image, brand, category, description, numReviews, price, countInStock, paymentPlan))

    }

    return (
        <div className="edit-screen">
            <DashboardContainer>
                <Form onSubmit={onSubmitHandler}>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Basic Information</span>
                        </div>
                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <img className="" src={image} alt='' />
                                </div>
                                <label>image:</label>
                                <input type="text" onChange={(e)=>setImage(e.target.value)}/>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span><input type="text" onChange={(e)=>setName(e.target.value)}/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Category:</label>
                                                <span><input type="text" onChange={(e)=>setCategory(e.target.value)}/></span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Price:</label>
                                                <span><input type="text" onChange={(e)=>setPrice(e.target.value)}/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Plan:</label>
                                                <span><input type="text" onChange={(e)=>setPaymentPlan(e.target.value)}/></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details def-padding">
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
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className="user-details def-padding">
                                    <div className="details-wrapper">
                                        <label>Short Description:</label>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            data= {description}
                                            onReady={ editor => {
                                            } }
                                            // onChange={(e, editor)=>{
                                            //     const data = editor.getData();
                                            //     setDescription(data)
                                            //     console.log(setDescription);
                                            // }}
                                            onBlur={ ( event, editor ) => {
                                                console.log( 'Blur.', editor );
                                            } }
                                            onFocus={ ( event, editor ) => {
                                                console.log( 'Focus.', editor );
                                            } }
                                        />
                                    </div>
                                    <div className="details-wrapper">
                                        <label>Created by:</label>
                                        <span><input type="text"/></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="button-wrapper def-padding">
                        <button type="submit" className='update-btn'>Save</button>
                        <NavLink to="/admin/productlist/">Cancel</NavLink> 
                    </div>
                </Form>
            </DashboardContainer>
        </div>
    )
}
export default ProductAddScreen