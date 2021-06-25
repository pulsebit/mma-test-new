import mongoose from 'mongoose'

const supportSchema = mongoose.Schema({
      ticket_no: {
         type: String,
         required: true
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

}, {
  timestamps: true
})

const Support = mongoose.model('Support', supportSchema)

export default Support