import express from 'express'
const router = express.Router()
import { 
  createNote,
  deleteNote,
  getNotes,
  getNotesUnderSupport
} from '../controllers/noteController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'

router.route('/')
.post(createNote)
.get(getNotes)

router.route('/:id')
.get(getNotesUnderSupport)
.delete(deleteNote)


export default router