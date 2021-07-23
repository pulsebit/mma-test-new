import mongoose from 'mongoose'

const paymentPlanSchema = mongoose.Schema({
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
  }
}, {
  timestamps: true
})

const PaymentPlan = mongoose.model('PaymentPlan', paymentPlanSchema)

export default PaymentPlan