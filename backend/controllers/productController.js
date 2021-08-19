import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import PaymentPlan from '../models/paymentPlanModel.js'


// @desc   Create Product
// @route  POST /api/product/
// @access private
const createProduct = asyncHandler( async (req, res) => {
  const { 
    name, 
    image, 
    brand, 
    category, 
    description, 
    reviews, 
    numReviews, 
    price, 
    countInStock
  } = req.body

  const productExists = await Product.findOne({ name })

  if(productExists) {
    res.status(400)
    throw new Error('Prooduct already exists')
  } 

  const product = await Product.create({
    name, 
    image, 
    brand, 
    category, 
    description,
    numReviews, 
    price, 
    countInStock,
  })

  if(product) {
    res.status(201).json('Product has been created')
  } else {
    res.status(401)
    throw new error('Invalid...')
  }

})
// @desc   Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler( async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
const getProductById = asyncHandler( async (req, res) => {
  const product = await Product.findById(req.params.id)
  
  if(product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc   Update Product
// @route  PUT /api/product/:id
// @access Private
const updateproduct = asyncHandler(async (req, res) => {
  
	const product = await Product.findById(req.params.id )

	if(product) {
    product.name = req.body.name || product.name
    product.image = req.body.image || product.price
    product.brand = req.body.brand || product.brand
    product.category = req.body.category || product.category
    product.description = req.body.description || product.description
    product.numReviews = req.body.numReviews || product.numReviews
    product.price = req.body.price || product.price
    product.countInStock = req.body.features || product.countInStock
    
    const updatedProduct = await product.save()

    res.json({
      _id: updatedProduct._id,
      name: updatedProduct.name,
      image: updatedProduct.image,
      brand: updatedProduct.brand,
      category: updatedProduct.category,
      description: updatedProduct.description,
      numReviews: updatedProduct.numReviews,
      price: updatedProduct.price,
      countInStock: updatedProduct.countInStock
    })

	} else {
			res.status(404)
			throw new Error('Product not found')
	}
})
// @desc   Delete Product
// @route  Delete /api/product/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  
	const product = await Product.findById(req.params.id)

	if(product) {
		  await product.remove()
			res.json({ message: 'Product removed successfully!'})
	} else {
			res.status(404)
			throw new Error('Product Plan not found')
	}
})



export { createProduct, getProducts, getProductById, updateproduct, deleteProduct }