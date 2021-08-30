import express from 'express'
const router = express.Router()
import { 
    getPaymentPlansByCretorId
} from '../controllers/paymentPlanController.js'

router.route('/:id').get(getPaymentPlansByCretorId)


export default router