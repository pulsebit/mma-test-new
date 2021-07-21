import express from 'express'
const router = express.Router()
import { getPaymentPlans, getPaymentPlanById } from '../controllers/paymentPlanController.js'


router.route('/').get(getPaymentPlans)
router.route('/:id').get(getPaymentPlanById)


export default router