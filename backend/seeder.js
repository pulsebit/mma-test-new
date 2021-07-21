import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import products from './data/products.js'
import paymentPlans from './data/paymentplans.js'

import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import PaymentPlan from './models/paymentPlanModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
   try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();
      await PaymentPlan.deleteMany();
      

      const createdUsers = await User.insertMany(users)
      //First user is admin
      const adminUser = createdUsers[0]._id
      
      //Add products under admin user
      const sampleProducts = products.map(product => {
         return {...product, user: adminUser}
      })

      await Product.insertMany(sampleProducts)

      // Add Plans
      await PaymentPlan.insertMany(paymentPlans)

      console.log('Data Imported!'.green.inverse)
      process.exit()

   } catch (error) {
      console.log(`${error}`.red.inverse)
      process.exit(1)
   }
}


const destroyData = async () => {
  try {
      await Order.deleteMany();
      await Product.deleteMany();
      await User.deleteMany();

      // await PaymentPlan.deleteMany();

      console.log('Data Destroyed!'.red.inverse)
      process.exit()

  } catch (error) {
     console.log(`${error}`.red.inverse)
     process.exit(1)
  }
}

if(process.argv[2] == '-d') {
   destroyData()
} else {
   importData()
}