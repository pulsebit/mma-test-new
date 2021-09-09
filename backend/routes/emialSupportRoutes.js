import express from 'express'
import { createEmailSupport, getEmailSupports } from '../controllers/supportEmailController.js'
const router = express.Router()

router.route('/').post(createEmailSupport).get(getEmailSupports)

export default router