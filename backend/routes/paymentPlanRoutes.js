import express from 'express'
const router = express.Router()
import { 
    getPaymentPlans, 
    getPaymentPlanById, 
    updatePaymentPlan,
    deletePaymentPlan,
    createPaymentPlan
} from '../controllers/paymentPlanController.js'


router.route('/').get(getPaymentPlans).post(createPaymentPlan)
router.route('/:id').get(getPaymentPlanById).delete(deletePaymentPlan)
router.route('/:id/edit').put(updatePaymentPlan)


export default router