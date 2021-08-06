import asyncHandler from 'express-async-handler'
import KnowledgeBase from '../models/knowledgeBaseModel.js'


// @desc   KnowledgeBase
// @route  POST /api/knowledge-base/
// @access private
const createKnowledgeBase = asyncHandler( async (req, res) => {
    const { 
        problem_description, 
        solution, 
        category,
        resolve_by,
        created_by,
    } = req.body
  
    const knowledgeBase = await KnowledgeBase.create({
        problem_description, 
        solution, 
        category,
        resolve_by,
        created_by,
    })
  
    if(knowledgeBase) {
      res.status(201).json('Knowledge Base has been created')
    } else {
      res.status(401)
      throw new error('Invalid...')
    }
})

// @desc   Fetch all knowledge-base 
// @route  GET /api/knowledge-base
// @access Public
const getKnowledgeBase = asyncHandler( async (req, res) => {
    const knowledgeBase = await KnowledgeBase.find({}).populate('resolve_by').populate('created_by')

    res.json(knowledgeBase)
})

// @desc     Read/Fetch single knowledge-base 
// @route    GET /api/knowledge-base/:id
// @access   Public
const getKnowledgeBaseById = asyncHandler( async (req, res) => {
  const knowledgeBase = await KnowledgeBase.findById(req.params.id).populate('created_by').populate('resolve_by')
  
  if(knowledgeBase) {
    res.json(knowledgeBase)
  } else {
    res.status(404)
    throw new Error('Knowledge Base not found')
  }
})

// @desc     Update single knowledge-base 
// @route    GET /api/paymentplans/:id
// @access   Public
const updateKnowledgeBase = asyncHandler(async (req, res) => {
  
	const knowledgeBase = await KnowledgeBase.findById(req.params.id )


	if(knowledgeBase) {
    knowledgeBase.problem_description = req.body.problem_description || knowledgeBase.problem_description
    knowledgeBase.solution = req.body.solution || knowledgeBase.solution
    knowledgeBase.category = req.body.category || knowledgeBase.category
    knowledgeBase.resolve_by = req.body.resolve_by || knowledgeBase.resolve_by
    knowledgeBase.created_by = req.body.created_by || knowledgeBase.created_by
    
    const updatedKnowledgeBase = await knowledgeBase.save()

    res.json({
      _id: updatedKnowledgeBase._id,
      problem_description: knowledgeBase.problem_description,
      solution: knowledgeBase.solution,
      category:knowledgeBase.category,
      resolve_by: knowledgeBase.resolve_by,
      created_by: knowledgeBase.created_by,
    })

	} else {
			res.status(404)
			throw new Error('Knowledge Base not found')
	}
})

// @desc   Delete Payment Plan
// @route  Delete /api/paymentplans/:id
// @access Private
const deleteKnowledgeBase = asyncHandler(async (req, res) => {
  
	const paymentPlan = await PaymentPlan.findById(req.params.id)

	if(paymentPlan) {
		  await paymentPlan.remove()
			res.json({ message: 'Payment Plan removed successfully!'})
	} else {
			res.status(404)
			throw new Error('Payment Plan not found')
	}
})


export { createKnowledgeBase, getKnowledgeBase, deleteKnowledgeBase, updateKnowledgeBase, getKnowledgeBaseById}