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

//404 handler
app.use(notFound)

//Error handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(
  PORT, 
  console.log(`Server running on port ${PORT}`.yellow.bold));

