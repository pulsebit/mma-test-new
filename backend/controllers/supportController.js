import asyncHandler from 'express-async-handler'
import Support from '../models/supportModel.js'
import User from '../models/userModel.js'



// @desc   Get all support tickets
// @route  GET /api/supports
// @access private
const getSupports = asyncHandler( async (req, res) => {
    const supports = await Support
    .find({})
    .populate('client')
    .populate('created_by')
    .populate('assignee')
    res.json(supports)
})

// @desc   Get single support tickets
// @route  GET /api/supports/:id
// @access private
const getSupportById = asyncHandler( async (req, res) => {
  const supports = await Support
  .findById(req.params.id)
  .populate('client')
  .populate('created_by')
  .populate('assignee')
  
  if(supports) {
    res.json(supports)
  } else {
    res.status(404)
    throw new Error('Support not found')
  }
})

// @desc   Add new support
// @route  POST /api/supports
// @access private
const createSupport = asyncHandler( async (req, res) => {
      const { client, ticket_no, problem_description, status, priority, category, assignee, created_by} = req.body
      const ticketExists = await Support.findOne({ ticket_no })

    if(ticketExists) {
      res.status(400)
      throw new Error('Ticket already exists')
    } 

    const support = await Support.create({client, ticket_no, problem_description, status, priority, category, assignee, created_by})

    if(support) {
      res.status(201).json({
          _id: support._id,
          ticket_no: support.ticket_no,
          problem_description: support.problem_description, 
          status: support.status, 
          priority: support.priority,
          category: support.category,
          created_by: support.created_by
      })
    } else {
      res.status(401)
      throw new error('Invalid support data')
    }

})

// @desc   Delete support
// @route  DELETE /api/supports
// @access private
const deleteSupport = asyncHandler( async (req, res) => {
     const id = req.params.id 

     const support = await Support.findById(id)

     if(support) {
          await support.remove()
          res.json({ message: 'Support ticket has been succesfully delete' })
     } else {
        res.status(404)
        throw new Error('Ticket not found')
     }

})

const updateSupport = asyncHandler(async (req, res) => {
  
	const support = await Support.findById(req.params.id )


	if(support) {
    support.problem_description = req.body.problem_description || support.problem_description
    support.priority = req.body.priority || support.priority
    support.status = req.body.status || support.status
    support.category = req.body.category || support.category
    support.assignee = req.body.assigneeInfo || support.assignee

    //support.assignee.push(req.body.assigneeInfo)
    
    await support.save()

    res.json({ message: 'Support ticket has been succesfully Updated' })

	} else {
			res.status(404)
			throw new Error('Support ticket not found')
	}
})


export { getSupports, createSupport, deleteSupport, getSupportById, updateSupport }