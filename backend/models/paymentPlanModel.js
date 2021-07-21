import mongoose from 'mongoose'

const paymentPlanSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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
    required: true
  },
  prod_name: {
    type: String,
    required: true
  },
  prod_short_description: {
    type: String,
    required: true
  },
  prod_description: {
    type: String,
    required: true
  },
  prod_price: {
    type: String,
    required: true
  },
  prod_date_create: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const PaymentPlan = mongoose.model('PaymentPlan', paymentPlanSchema)

export default PaymentPlan