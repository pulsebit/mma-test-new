import asyncHandler from 'express-async-handler'
import PaymentPlan from '../models/paymentPlanModel.js'
import User from '../models/userModel.js'



// @desc   Create Payment Plan     
// @route  POST /api/paymentplans/ 
// @access private                 
const createPaymentPlan = asyncHandler( async (req, res) => {


  const { creator, name, price, image, description, features } = req.body
 
  const paymentPlanExists = await PaymentPlan.findOne({ name })
  console.log(paymentPlanExists)

  if(paymentPlanExists) {
    res.status(400)
    throw new Error("Payment Plan already exist..")
  }
  
  //create 
  const newPlan = new PaymentPlan({creator, name, price, image, description, features})

  //add products
  // newPlan.product.push(product) 

  const paymentPlan = newPlan.save() 

  User.planCreated.push(paymentPlan._id);


  if(paymentPlan) {
    res.status(201).json('Payment Plan has been created')
  } else {
    res.status(401)
    throw new error('Invalid...')
  }
})



// @desc   Update or Add Payment Plan Product only 
// @route  PUT /api/paymentPlan/product-update/:id 
// @access Private                                 
const paymentPlanAddProduct = asyncHandler(async (req, res) => {
  
  const paymentPlan = await PaymentPlan.findById(req.params.id)
  const product = req.body.tempProduct

	if(paymentPlan) {
    paymentPlan.product.push(product)
    paymentPlan.save()
  }

  res.json({
    _id: paymentPlan._id,
    name: paymentPlan.name,
    price: paymentPlan.price,
    image: paymentPlan.image,
    description: paymentPlan.description,
    features: paymentPlan.features,
    product: paymentPlan.product
  })
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
  const paymentPlan = await PaymentPlan.findById(req.params.id).populate('product')
  
  if(paymentPlan) {
    res.json(paymentPlan)
  } else {
    res.status(404)
    throw new Error('Payment Plan not found')
  }
})

// @desc     Read/Fetch single Payment Plan
// @route    GET /api/services/
// @access   Public
const getPaymentPlansByCretorId = asyncHandler( async (req, res) => {
  const { creatorId } = req.body
  const paymentPlan = await PaymentPlan.find({ creator: creatorId })
  
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



export { getPaymentPlans,getPaymentPlanById, updatePaymentPlan, deletePaymentPlan, createPaymentPlan, paymentPlanAddProduct, getPaymentPlansByCretorId }