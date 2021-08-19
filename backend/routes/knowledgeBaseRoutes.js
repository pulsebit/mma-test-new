import express from 'express'
const router = express.Router()
import { createKnowledgeBase, deleteKnowledgeBase, getKnowledgeBase, getKnowledgeBaseById, updateKnowledgeBase } from '../controllers/knowledgeBaseController.js'


router.route('/').post(createKnowledgeBase).get(getKnowledgeBase)

router.route('/:id').put(updateKnowledgeBase).get(getKnowledgeBaseById).delete(deleteKnowledgeBase)

export default router