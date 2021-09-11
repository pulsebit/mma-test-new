import express from 'express'
import { createAccess, getAccessListByCretorId, getAccessById } from '../controllers/accessController.js'
const router = express.Router()

router.route('/').post(createAccess)
router.route('/:id').get(getAccessById)
router.route('/creator/:id').get(getAccessListByCretorId)

export default router