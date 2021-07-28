import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../actions/productActions'

const PaymentProduct = ({ id }) => {
    const dispatch = useDispatch()

    const { product } = useSelector(state => state.productDetails)
    console.log(product)

    useEffect(() => {
        dispatch(getProductDetails(id))
    },[dispatch, id])

    function description() {
        return {__html: product.description};
    }

    return (
        <>
            <td>{product.name}</td>
            <td> <div dangerouslySetInnerHTML={description()} /></td>
            <td>{product.price}</td>
            <td>{product.createdAt}</td>
        </>
    )
}

export default PaymentProduct
