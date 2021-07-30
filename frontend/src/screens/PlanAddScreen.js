import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Row, Col, Form } from 'react-bootstrap'
import { createPaymentPlan } from '../actions/paymentPlanAction'
import { listProducts, listTempProducts } from '../actions/productActions'
import DashboardContainer from '../components/DashboardContainer'
import defaultImage from '../assets/images/user.png'

const PlanAddScreen = () => {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatures] = useState('')
    const [allProducts, setAllProducts] = useState('')
    const [tempProduct, setTempProduct] = useState('')
    const [productsData, setProductsData] = useState('')
    

    const { tempProductHolder } = useSelector( state => state.tempProducts)

    const { products } = useSelector( state => state.productList)
    
    
    const { product } = useSelector(state => state.productDetails)

    // useEffect(() => {
    //     dispatch(listProducts())
        
    //     console.log("useEffect:" + tempProduct)
    //     if(tempProduct){
    //         setAllProducts([...allProducts, tempProductHolder])
    //         console.log(productsData)
            
    //     }
        
    // }, [dispatch, tempProductHolder])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createPaymentPlan(name, price, image, description, features, productsData))
    }
    
    // const addProductHandler = (e) => {
    //     e.preventDefault()

    //     dispatch(listTempProducts(tempProduct))
    //     setProductsData([...productsData, tempProduct])
            
        
    // }

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
                                        onChange={(e, editor)=>{
                                            const data = editor.getData();
                                            setDescription(data)
                                        }}
                                    />
                                </div>
                                <div className="details-wrapper">
                                    <label>Features:</label>
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onChange={(e, editor)=>{
                                            const data = editor.getData();
                                            setFeatures(data)
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row> 
                </div>

                <div className="section-wrapper">
                    <div className="blue-bkg-title def-padding">
                        <span>Products Included</span>
                        
                        {/* <div className="button-wrapper">
                            <select id="listProducts" onChange={(e)=> setTempProduct(e.target.value)}>
                                <option value="">Select Product</option>
                                {products.map((product) => (
                                    <option value={product._id} id={product.name}>{product.name}</option>
                                ))}
                            </select>
                            <button onClick={addProductHandler} type="submit">+</button>
                        </div> */}
                    </div>
                    
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
                             { allProducts ? (
                                allProducts.map((product) => (
                                    <tr>   
                                        
                                        <td>{product.name}</td>
                                        <td>{ReactHtmlParser(product.description)}</td>
                                        <td>{product.price}</td>
                                        <td>{product.createdAt}</td>
                                        <td>
                                            <div className="button-wrapper">
                                                <button className='delete-btn'>Delete</button>  
                                            </div>  
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <h3>No Products found</h3>
                            )} 
                                    
                                
                            </tbody>
                        </table>
                    </div>
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
