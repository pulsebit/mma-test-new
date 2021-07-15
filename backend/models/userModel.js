import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import aggregatePaginate   from 'mongoose-aggregate-paginate-v2'

const userSchema = mongoose.Schema({
  sub: {
    type: String,
    default: null,
  },
  fb_id: {
   type: String,
   default: null,
 },
  first_name: {
     type: String,
     default: null,
  },
  last_name: {
   type: String,
   default: null,
  },
  picture: {
   type: String,
   default: null,
  },
   name: {
     type: String,
   },
   email: {
    type: String,
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
  }
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

userSchema.plugin(aggregatePaginate )

const User = mongoose.model('User', userSchema)

export default User

