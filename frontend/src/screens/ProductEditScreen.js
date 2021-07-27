import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import DashboardContainer from '../components/DashboardContainer'
import Seo from '../assets/images/seo.jpg'

import { deleteProduct, getProductDetails, updateProduct } from '../actions/productActions'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { PRODUCT_UPDATE_RESET }  from '../constants/productConstants'


const ProductEditScreen = ({match, history}) => {
    const productId = match.params.id
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [numReviews, setNumReviews] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const [paymentplan, setPaymentplan] = useState('')

    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { loading:loadingUpdate, error:errorUpdate, success:successUpdate } = productUpdate


    const productDelete = useSelector(state => state.productDelete)
    const { loading:loadingDelete, error:errorDelete, success:successDelete } = productDelete


    useEffect(() => {
        if(successUpdate || successDelete) {
            dispatch({ type: PRODUCT_UPDATE_RESET})
            history.push('/admin')
        } 
        else {
            if( !product.name || product._id !== productId) {
                dispatch(getProductDetails(productId))
            } else {
                setName(product.name)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setDescription(product.description)
                setNumReviews(product.numReviews)
                setPrice(product.price)
                setCountInStock(product.countInStock)
                setPaymentplan(product.paymentPlans)
            }
        }
    }, [dispatch, productId, product, match, history, successUpdate, successDelete])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({ 
            _id: 
                productId, 
                name, 
                image, 
                brand, 
                category, 
                description,
                numReviews, 
                price, 
                countInStock
        }))
    }

    const onDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteProduct(productId))
    }



    return (
        <div className="edit-screen">
            <Form onSubmit={onSubmitHandler}>
                <DashboardContainer>
                    <div className="section-wrapper">
                        <div className="blue-bkg-title def-padding">
                            <span>Basic Information</span>
                        </div>
                        <Row>
                            <Col md={2}>
                                <div className="img-wrapper">
                                    <img className="" src={image} alt='' />
                                    {/* <div className="upload-btn">
                                        <input type="file" Value="Edit Image" className="choose-file"/>
                                        <FontAwesomeIcon icon={faCamera} className="camera"></FontAwesomeIcon>
                                    </div> */}
                                </div>
                                <label>image:</label>
                                <input type="text" onChange={(e)=>setImage(e.target.value)}/>
                            </Col>
                            <Col md={10}>
                                <div className="user-details def-padding">
                                    <Row>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>ID:</label>
                                                <span><input type="text" value={productId} readOnly/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Name:</label>
                                                <span><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>SKU:</label>
                                                <span><input type="text" placeholder="A123"/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Date Added:</label>
                                                <span><input type="text" value={product.createdAt} readOnly/></span>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="details-wrapper">
                                                <label>Category:</label>
                                                <span><input type="text" value={category} onChange={(e)=>setCategory(e.target.value)}/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Regular Price:</label>
                                                <span><input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Sale Price:</label>
                                                <span><input type="text" placeholder="599 AUD"/></span>
                                            </div>
                                            <div className="details-wrapper">
                                                <label>Add to Plan:</label>
                                                <span><input type="text" /></span>
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
                                            onChange={(e, editor)=>{
                                                const data = editor.getData();
                                                // setDescription(data)
                                                // console.log(setDescription);
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
                                        <label>Created by:</label>
                                        <span><input type="text" placeholder="July Cabigas"/></span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="button-wrapper def-padding">
                        <button type="submit" value="Update" className='update-btn'>Update</button>
                        <button onClick={onDeleteHandler} className='delete-btn'>Delete</button> 
                        <NavLink to={`/admin/product/${productId}`}>Cancel</NavLink> 
                    </div> 
                        
                </DashboardContainer>
            </Form>
        </div>
    )
}
export default ProductEditScreen