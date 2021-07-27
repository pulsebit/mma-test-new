import asyncHandler from 'express-async-handler'
import PaymentPlan from '../models/paymentPlanModel.js'
import Product from '../models/productModel.js'

// @desc   Create Payment Plan
// @route  POST /api/paymentplans/
// @access private
const createPaymentPlan = asyncHandler( async (req, res) => {
  const { name , product } = req.body

  const objectProduct = await Product.findById ({ product })

  const paymentPlanExists = await PaymentPlan.findOne({ name })

  if(paymentPlanExists) {
    res.status(400)
    throw new Error('Payment Plan already exists')
  } 

  //create 
  const newPlan = new PaymentPlan(req.body)

  //add products
  newPlan.product.push(objectProduct) 

  const paymentPlan = newPlan.save()

  if(paymentPlan) {
    res.status(201).json('Payment Plan has been created')
  } else {
    res.status(401)
    throw new error('Invalid...')
  }

})

// @desc     Read/Fetch Payment Plans
// @route    GET /api/paymentplans/
// @access   Public
const getPaymentPlans = asyncHandler( async (req, res) => {
  const paymentPlans = await PaymentPlan.find({})

  res.json(paymentPlans)
})

// @desc     Read/Fetch single Payment Plan
// @route    GET /api/paymentplans/:id
// @access   Public
const getPaymentPlanById = asyncHandler( async (req, res) => {
  const paymentPlan = await PaymentPlan.findById(req.params.id)
  
  if(paymentPlan) {
    res.json(paymentPlan)
  } else {
    res.status(404)
    throw new Error('Payment Plan not found')
  }
})

// @desc   Update Payment Plan
// @route  PUT /api/paymentPlan/:id
// @access Private
const updatePaymentPlan = asyncHandler(async (req, res) => {
  
	const paymentPlan = await PaymentPlan.findById(req.params.id )


	if(paymentPlan) {
    paymentPlan.name = req.body.name || paymentPlan.name
    paymentPlan.price = req.body.price || paymentPlan.price
    paymentPlan.image = req.body.image || paymentPlan.image
    paymentPlan.description = req.body.description || paymentPlan.description
    paymentPlan.features = req.body.features || paymentPlan.features
    
    const updatedPaymentPlan = await paymentPlan.save()

    res.json({
      _id: updatedPaymentPlan._id,
      name: updatedPaymentPlan.name,
      price: updatedPaymentPlan.price,
      image: updatedPaymentPlan.image,
      description: updatedPaymentPlan.description,
      features: updatedPaymentPlan.features,
    })

	} else {
			res.status(404)
			throw new Error('Payment Plan not found')
	}
})

// @desc   Delete Payment Plan
// @route  Delete /api/paymentplans/:id
// @access Private
const deletePaymentPlan = asyncHandler(async (req, res) => {
  
	const paymentPlan = await PaymentPlan.findById(req.params.id)

	if(paymentPlan) {
		  await paymentPlan.remove()
			res.json({ message: 'Payment Plan removed successfully!'})
	} else {
			res.status(404)
			throw new Error('Payment Plan not found')
	}
})

// @desc   Update Payment Plan
// @route  PUT /api/paymentPlan/:id
// @access Private
const paymentPlanAddProduct = asyncHandler(async (req, res) => {
   
  // Pass payment plan ID & Product ID
  const paymentPlanId = req.params.id
  const productId = req.body.productId 

  //verify payment plan
	const paymentPlan = await PaymentPlan.findById(paymentPlanId)
  
  //if payment plan exist
	if(paymentPlan) {
    paymentPlan.name = paymentPlan.name
    paymentPlan.price = paymentPlan.price
    paymentPlan.image = paymentPlan.image
    paymentPlan.description = paymentPlan.description
    paymentPlan.features = paymentPlan.features
    

    // Get products from the payment plan
    let products = paymentPlan.products 

    //Merge products with the new one
    products.push(productId)
    
    const updatedPaymentPlan = await paymentPlan.save()

    res.json({
      _id: updatedPaymentPlan._id,
      name: updatedPaymentPlan.name,
      price: updatedPaymentPlan.price,
      image: updatedPaymentPlan.image,
      description: updatedPaymentPlan.description,
      features: updatedPaymentPlan.features,
      products: updatedPaymentPlan.products,
    })

	} else {
			res.status(404)
			throw new Error('Payment Plan not found')
	}
})

export { getPaymentPlans,getPaymentPlanById, updatePaymentPlan, deletePaymentPlan, createPaymentPlan, paymentPlanAddProduct }