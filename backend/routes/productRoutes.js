import express from 'express'
const router = express.Router()
import { 
    createProduct, 
    getProducts, 
    getProductById, 
    updateproduct,
    deleteProduct
} from '../controllers/productController.js'


router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getProductById).delete(deleteProduct)
router.route('/:id/edit').put(updateproduct)


export default router