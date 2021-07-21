import asyncHandler from 'express-async-handler'
import PaymentPlan from '../models/paymentPlanModel.js'


const getPaymentPlans = asyncHandler( async (req, res) => {
  const paymentPlans = await PaymentPlan.find({})

  res.json(paymentPlans)
})

// @desc     Fetch single payment plan
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
export { getPaymentPlans,getPaymentPlanById }


// @desc   Add new support
// @route  POST /api/supports
// @access private
const createPaymentPlan = asyncHandler( async (req, res) => {

  const { name, email, password } = req.body
  
})