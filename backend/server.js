import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import path from 'path';
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
let __dirname = path.resolve(path.dirname(''));
//Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import supportRoutes from './routes/supportRoutes.js'
import paymentPlanRoutes from './routes/paymentPlanRoutes.js'
import noteRoutes from './routes/noteRoutes.js'
import knowledgeBaseRoutes from './routes/knowledgeBaseRoutes.js'
import cookieParser from 'cookie-parser';
import { authToken } from './controllers/authController.js';

const PORT = process.env.PORT || 5000;

dotenv.config()
connectDB()
const app = express()

app.use( express.json(({ limit: '50mb' })) );
app.use( express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}) );
app.use(cookieParser('secret-shhhhhhhh'));

app.use('/storage', express.static(path.join(__dirname, 'backend/storage')));
//Routing
app.get('/',(req, res) => res.send("API is running"))
app.post('/token', authToken);
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/supports', supportRoutes)
app.use('/api/paymentplans', paymentPlanRoutes)
app.use('/api/notes', noteRoutes)
app.use('/api/knowledge-base', knowledgeBaseRoutes)

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

//404 handler
app.use(notFound)
//Error handler
app.use(errorHandler)

app.listen(
  PORT, 
  console.log(`Server running on port ${PORT}`.yellow.bold));

