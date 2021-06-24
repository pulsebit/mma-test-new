import asyncHandler from 'express-async-handler'
import Support from '../models/supportModel.js'


// @desc   Get all support tickets
// @route  GET /api/supports
// @access private
const getSupports = asyncHandler( async (req, res) => {
  
    const supports = await Support.find({})
    res.json(supports)
})

// @desc   Add new support
// @route  POST /api/supports
// @access private
const createSupport = asyncHandler( async (req, res) => {
      const { ticket_no, problem_description, status, priority, category, created_by  } = req.body
      const ticketExists = await Support.findOne({ ticket_no })

    if(ticketExists) {
      res.status(400)
      throw new Error('Ticket already exists')
    } 

    const support = await Support.create({
      ticket_no, 
      problem_description,
      status, 
      priority,
      category,
      created_by
    })

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


export { getSupports, createSupport, deleteSupport }