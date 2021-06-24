import express from 'express'
const router = express.Router()
import { 
	getSupports,
  createSupport,
  deleteSupport
} from '../controllers/supportController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'

router.route('/').post(protect, adminOnly, createSupport ).get(protect, adminOnly, getSupports)  
router.route('/:id').delete(protect, adminOnly, deleteSupport)

export default router