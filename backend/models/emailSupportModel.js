import mongoose from 'mongoose'

const emailSupportSchema = mongoose.Schema({
  senderName: {
    type: String,
    required: true
  },
  senderEmail: {
      type: String,
      required: true
  },
  emailContent: {
    type: String,
    required: true
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
}, {
  timestamps: true
})

const EmailSupport = mongoose.model('Emailsupport', emailSupportSchema)

export default EmailSupport