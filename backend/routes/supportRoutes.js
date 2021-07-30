import express from 'express'
const router = express.Router()
import { 
	getSupports,
  createSupport,
  deleteSupport,
  getSupportById
} from '../controllers/supportController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'

router.route('/').post(createSupport ).get(getSupports)  
router.route('/:id').delete(deleteSupport).get(getSupportById)

export default router