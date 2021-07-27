import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Row, Col, Form } from 'react-bootstrap'
import { getProductDetails } from '../actions/productActions'
import { createPaymentPlan, paymentPlanAddProduct } from '../actions/paymentPlanAction'
import { listProducts } from '../actions/productActions'
import DashboardContainer from '../components/DashboardContainer'
import defaultImage from '../assets/images/user.png'

const PlanAddScreen = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [product, setProduct] = useState('')
    

    const productList = useSelector( state => state.productList)
    const { products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createPaymentPlan(name, price, image, description, features, product))
        console.log(product)

    }
    
    const addTableHandler = (e) => {
        e.preventDefault()
        console.log(product)
        // setProduct(e.target.value)
        dispatch(getProductDetails(setProduct))
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
                                            <span><input type="number" onChange={(e)=>setPrice(e.target.value)}/></span>
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
                </div>

                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Products Included</span>
                        
                        <div className="button-wrapper">
                            <select value={product} onChange={addTableHandler}>
                                <option value="">Select Product</option>
                                {products.map((product) => (
                                    <option value={product._id}>{product.name}</option>
                                ))}
                            </select>
                            <button type="submit">+</button>
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
                <div className="button-wrapper def-padding">
                    <button type="submit" className='update-btn'>Save</button>
                </div>
                </Form>
            </DashboardContainer>
        </div>
    )
}

export default PlanAddScreen
