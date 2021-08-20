import mongoose from 'mongoose'
import Product from './productModel.js'

const paymentPlanSchema = mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
     type: String,
     required: true
   },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: String,
    required: true
  },
  subscribers: {
    type: Number,
    required: false
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
}, {
  timestamps: true
})

const PaymentPlan = mongoose.model('PaymentPlan', paymentPlanSchema)

export default PaymentPlan