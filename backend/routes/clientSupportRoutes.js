import express from 'express'
const router = express.Router()
import { getSupportsByCretorId } from '../controllers/supportController.js'

router.route('/:id').get(getSupportsByCretorId)

export default router