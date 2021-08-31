import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import supportRoutes from './routes/supportRoutes.js'
import paymentPlanRoutes from './routes/paymentPlanRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import knowledgeBaseRoutes from './routes/knowledgeBaseRoutes.js'
import clientSupportRoutes from './routes/clientSupportRoutes.js'

// const stripe = require("stripe")("sk_test_51Ix0jGDU4maXsdFIcPHEEuvRS7kHr3uOpfQuUUDbX3psyxQyr4gEPWbEpGts0Mh8B9cWC8ppH21YqRJRrMQEgnN800TK1e8G9O")



dotenv.config()

connectDB()

const app = express()

app.use(express.json())

//Routing
app.get('/',(req, res) => {
     res.send("API is running")
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/supports', supportRoutes)
app.use('/api/client-supports', clientSupportRoutes)
app.use('/api/paymentplans', paymentPlanRoutes)
app.use('/api/services', serviceRoutes)
app.use('/api/notes', noteRoutes)
app.use('/api/knowledge-base', knowledgeBaseRoutes)

// app.post("/checkout", async (req, res) => {
//      console.log("Request:", req.body);

//      let error;
//      let status;
//      try {
//           const { product, token } = req.body;

//           const customer = await stripe.customers.create({
//           email: token.email,
//           source: token.id
//           });

//           const idempotency_key = uuid();
//           const charge = await stripe.charges.create(
//           {
//                amount: product.price * 100,
//                currency: "usd",
//                customer: customer.id,
//                receipt_email: token.email,
//                description: `Purchased the ${product.name}`,
//                shipping: {
//                name: token.card.name,
//                address: {
//                line1: token.card.address_line1,
//                line2: token.card.address_line2,
//                city: token.card.address_city,
//                country: token.card.address_country,
//                postal_code: token.card.address_zip
//                }
//                }
//           },
//           {
//                idempotency_key
//           }
//           );
//           console.log("Charge:", { charge });
//           status = "success";
//      } catch (error) {
//           console.error("Error:", error);
//           status = "failure";
//      }

//      res.json({ error, status });
// });

//404 handler
app.use(notFound)

//Error handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(
  PORT, 
  console.log(`Server running on port ${PORT}`.yellow.bold));

