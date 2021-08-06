import express from 'express'
const router = express.Router()
import { createKnowledgeBase, getKnowledgeBase, getKnowledgeBaseById, updateKnowledgeBase } from '../controllers/knowledgeBaseController.js'


router.route('/').post(createKnowledgeBase).get(getKnowledgeBase)

router.route('/:id').put(updateKnowledgeBase).get(getKnowledgeBaseById)

export default router