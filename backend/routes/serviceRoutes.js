import express from 'express'
const router = express.Router()
import { 
    getPaymentPlansByCretorId
} from '../controllers/paymentPlanController.js'

router.route('/').get(getPaymentPlansByCretorId)


export default router