import mongoose from 'mongoose'

const supportSchema = mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  ticket_no: {
      type: String,
      required: true
  },
  problem_description: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: false
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
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

}, {
  timestamps: true
})

const Support = mongoose.model('Support', supportSchema)

export default Support