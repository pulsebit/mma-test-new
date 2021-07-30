import mongoose from 'mongoose'

const supportSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  problem_description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  resolution: {
    type: String,
    required: false
  },
  assigned_by: {
    type: String,
    required: false
  },
  created_by: {
    type: String,
    required: true
  }
},{
  timestamps: true
})

const Support = mongoose.model('Support', supportSchema)

export default Support