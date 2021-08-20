import express from 'express'
const router = express.Router()
import { 
    getPaymentPlanByCretorId
} from '../controllers/paymentPlanController.js'

router.route('/').get(getPaymentPlanByCretorId)


export default router