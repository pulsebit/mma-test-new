import express from 'express'
const router = express.Router()
import { 
	getSupports,
  createSupport,
  deleteSupport,
  getSupportById,
  updateSupport
} from '../controllers/supportController.js'
import { 
  createNote,
  getNotesUnderSupport
} from '../controllers/noteController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'

router.route('/')
.post(createSupport )
.get(getSupports)

router.route('/:id')
.delete(deleteSupport)
.get(getSupportById)
.put(updateSupport)
.post(createNote)
.get(getNotesUnderSupport)

export default router