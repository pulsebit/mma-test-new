import mongoose from 'mongoose'

const emailSupportSchema = mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  senderName: {
    type: String,
    required: true
  },
  senderEmail: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  emailContent: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const EmailSupport = mongoose.model('Emailsupport', emailSupportSchema)

export default EmailSupport