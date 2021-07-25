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
     default: null,
   },
   email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  mobile_no: {
     type: String,
     default: null,
  },
  gender: {
     type: String,
     default: null,
  },
  birthdate: {
     type: Date,
     default: null,
  },
  address: {
     type: String,
     default: null,
  },
  state: {
     type: String,
     default: null,
  },
  zipcode: {
     type: String,
     default: null,
  },
  country: {
     type: String,
     default: null,
  },
  business_name: {
     type: String,
     default: null,
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
   if(!this.isModified('password')) next()
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

userSchema.plugin(aggregatePaginate)

userSchema.index({ 
   first_name: 'text',
   last_name: 'text',
   name: 'text',
   email: 'text',
   mobile_no: 'text',
   gender: 'text',
   birthdate: 'text',
   address: 'text',
   state: 'text',
   zipcode: 'text',
   country: 'text',
   business_name: 'text',
});

const User = mongoose.model('User', userSchema)

export default User

