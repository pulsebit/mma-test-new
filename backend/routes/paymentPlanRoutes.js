import express from 'express'
const router = express.Router()
import { 
    getPaymentPlans, 
    getPaymentPlanById, 
    updatePaymentPlan,
    deletePaymentPlan,
    createPaymentPlan,
    paymentPlanAddProduct,
    getPaymentPlanByCretorId
} from '../controllers/paymentPlanController.js'


router.route('/').get(getPaymentPlans).post(createPaymentPlan)
router.route('/:id').get(getPaymentPlanById).delete(deletePaymentPlan)
router.route('/services').get(getPaymentPlanByCretorId)
router.route('/:id/edit').put(updatePaymentPlan)
router.route('/update-products/:id/').put(paymentPlanAddProduct)


export default router