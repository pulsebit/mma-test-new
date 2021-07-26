import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Row, Col, Form, NavLink } from 'react-bootstrap'
import { createPaymentPlan } from '../actions/paymentPlanAction'
import DashboardContainer from '../components/DashboardContainer'
import defaultImage from '../assets/images/user.png'

const PlanAddScreen = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createPaymentPlan(name, price, image, description, features))
    }

    return (
        <div className="edit-screen">
            <DashboardContainer>
                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Payment Information</span>
                    </div>
                    <Form onSubmit={onSubmitHandler}>
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
                                            <label>Name:</label>
                                            <span><input type="text" onChange={(e)=>setName(e.target.value)}/></span>
                                        </div>
                                        <div className="details-wrapper">
                                            <label>image:</label>
                                            <span><input type="text" onChange={(e)=>setImage(e.target.value)}/></span>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="details-wrapper">
                                            <label>Price</label>
                                            <span><input type="text" onChange={(e)=>setPrice(e.target.value)}/></span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="user-details">
                                <div className="details-wrapper">
                                    <label>Description:</label>
                                    {/* <p><input type="text>" onChange={(e)=>setDescription(e.target.value)} /></p> */}
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            console.log( 'Editor is ready to use!', editor );
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
                                    {/* <p><input type="text>" onChange={(e)=>setFeatures(e.target.value)} /></p> */}
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
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
                            <button type="submit" className='update-btn'>Save</button>
                        </div>
                    </Form>
                    
                </div>
            </DashboardContainer>
        </div>
    )
}

export default PlanAddScreen
