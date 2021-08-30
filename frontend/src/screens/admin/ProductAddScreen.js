
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Row, Col, Form } from 'react-bootstrap'
import DashboardContainer from '../../components/DashboardContainer'
import { createProduct } from '../../actions/productActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants';

<<<<<<< HEAD:frontend/src/screens/admin/ProductAddScreen.js
=======
import { createProduct } from '../actions/productActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
>>>>>>> da15b425908059e45bde7ed0fc2f4c523c01104e:frontend/src/screens/ProductAddScreen.js

const ProductAddScreen = ({history}) => {
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

    const { success:successCreateSupport } = useSelector( state => state.productCreate)

    useEffect(() => {
        if (successCreateSupport) {
            toast.success('Creating Product..',{
            position: "bottom-right",});
            setTimeout(() => {
                history.push(`/admin/productlist`)
              }, 5000);
            dispatch({type: PRODUCT_CREATE_RESET})
        }
         
    }, [dispatch, successCreateSupport])
    

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(createProduct(name, image, brand, category, description, numReviews, price, countInStock, paymentPlan))

    }

    return (
        <div className="edit-screen">
            <DashboardContainer>
                <Form onSubmit={onSubmitHandler}>
                    <div className="section-wrapper">
                        <div className="dashboard-title-wrapper">
                                <div className="dashboard-title">Add Product</div>
                        </div>
                        <Row>
                            {/* <Col md={2}>
                                <div className="img-wrapper">
                                    <label>image:</label>
                                    <img className="" src="https://club.helsemin.dk/wp-content/themes/oria/images/placeholder.png" alt='' />
                                </div>
                                
<<<<<<< HEAD:frontend/src/screens/admin/ProductAddScreen.js
                            </Col> */}
                            <Col md={12}>
=======
                            </Col>
                            <Col md={10}>
>>>>>>> da15b425908059e45bde7ed0fc2f4c523c01104e:frontend/src/screens/ProductAddScreen.js
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
                                                <span><input type="number" onChange={(e)=>setPrice(e.target.value)}/></span>
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

                    <div className="button-wrapper j-c-end def-padding">
                        <button type="submit" className='save-btn'><FontAwesomeIcon icon={faSave}/>Save</button>
                        <NavLink to="/admin/productlist/">Cancel</NavLink> 
                    </div>
                    <ToastContainer/>
                </Form>
            </DashboardContainer>
        </div>
    )
}
export default ProductAddScreen