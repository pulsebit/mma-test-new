import asyncHandler from 'express-async-handler'
import EmailSupport from '../models/emailSupportModel.js'



// @desc   Create Product
// @route  POST /api/product/
// @access private
const createEmailSupport = asyncHandler( async (req, res) => {
  const { 
    senderName, 
    senderEmail,
    emailContent
  } = req.body


  const emailSupport = await EmailSupport.create({
    senderName, 
    senderEmail,
    emailContent
  })

  if(emailSupport) {
    res.status(201).json('Message successfully added')
  } else {
    res.status(401)
    throw new error('Invalid...')
  }

})

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
const getEmailSupports = asyncHandler( async (req, res) => {
  const emailSupport = await EmailSupport.find({})

  res.json(emailSupport)
})

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
const getEmailSupportById = asyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)
  
  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// // @desc   Update Product
// // @route  PUT /api/product/:id
// // @access Private
// const updateproduct = asyncHandler(async (req, res) => {
  
// 	const product = await Product.findById(req.params.id )

// 	if(product) {
//     product.name = req.body.name || product.name
//     product.image = req.body.image || product.price
//     product.brand = req.body.brand || product.brand
//     product.category = req.body.category || product.category
//     product.description = req.body.description || product.description
//     product.numReviews = req.body.numReviews || product.numReviews
//     product.price = req.body.price || product.price
//     product.countInStock = req.body.features || product.countInStock
    
//     const updatedProduct = await product.save()

//     res.json({
//       _id: updatedProduct._id,
//       name: updatedProduct.name,
//       image: updatedProduct.image,
//       brand: updatedProduct.brand,
//       category: updatedProduct.category,
//       description: updatedProduct.description,
//       numReviews: updatedProduct.numReviews,
//       price: updatedProduct.price,
//       countInStock: updatedProduct.countInStock
//     })

// 	} else {
// 			res.status(404)
// 			throw new Error('Product not found')
// 	}
// })
// // @desc   Delete Product
// // @route  Delete /api/product/:id
// // @access Private
// const deleteProduct = asyncHandler(async (req, res) => {
  
// 	const product = await Product.findById(req.params.id)

// 	if(product) {
// 		  await product.remove()
// 			res.json({ message: 'Product removed successfully!'})
// 	} else {
// 			res.status(404)
// 			throw new Error('Product Plan not found')
// 	}
// })



export { createEmailSupport, getEmailSupports }