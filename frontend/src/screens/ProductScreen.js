import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getProductDetails } from '../actions/productActions'


const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product } = productDetails

  useEffect(() => {
    dispatch(getProductDetails(match.params.id))
  }, [dispatch, match])

  return (
    <div>
      <h1>Product Details</h1>
     { loading ? ( 
          <Loader /> 
      ) : error ? ( 
          <Message variant='danger'>{error}</Message>
      ) : (
         <Row>
           
               <Col>
                 <h1>{product.name}</h1>
               </Col>
           
         </Row>
       )}
    </div>
  )
}

export default ProductScreen
