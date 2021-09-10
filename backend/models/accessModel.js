import mongoose from 'mongoose'

const accessSchema = mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  loginUrl: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const Access = mongoose.model('Access', accessSchema)

export default Access