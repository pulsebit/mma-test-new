import mongoose from 'mongoose'

// const reviewSchema = mongoose.Schema({
//   name: {
//      type: String,
//      required: true
//   },
//   rating: {
//     type: Number,
//     required: true
//   },
//   comment: {
//     type: Number,
//     required: true
//   }
// }, { timestamps: true, })

const productSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'User'
  },
  name: {
     type: String,
     required: true
   },
  image: {
    type: String,
  },
  brand: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: false,
    default: 0
  },
  numReviews: {
    type: Number,
    required: false,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: false,
    default: 0
  },
  paymentPlan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaymentPlan'
  },

}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product

