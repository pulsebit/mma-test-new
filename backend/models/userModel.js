import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
   name: {
     type: String,
     required: true
   },
   email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  mobile_no: {
     type: String
  },
  gender: {
     type: String
  },
  birthdate: {
     type: String
  },
  address: {
     type: String
  },
  state: {
     type: String
  },
  zipcode: {
     type: String
  },
  country: {
     type: String
  },
  business_name: {
     type: String
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
   creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User'
   },
   planCreated: [
     {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'PaymentPlan'
     }
   ],
   subscribedPlan: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PaymentPlan'
   },
   dataStudioLink: {
      type: String
   },
   socialId: {
      type: String
   },
}, {
  timestamps: true
})

userSchema.methods.matchPassword = async function(enteredPassword) {
   return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
   if(!this.isModified('password')) {
     next()
   }

   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User

