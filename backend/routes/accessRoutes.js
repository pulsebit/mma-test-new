import express from 'express'
import { createAccess, getAccessListByCretorId } from '../controllers/accessController.js'
const router = express.Router()

router.route('/').post(createAccess)
router.route('/creator/:id').get(getAccessListByCretorId)

export default router