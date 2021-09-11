import asyncHandler from 'express-async-handler'
import Access from '../models/accessModel.js'

// @desc   Create Note
// @route  POST /api/note/
// @access private
const createAccess = asyncHandler( async (req, res) => {
    const { 
        creator,
        type,
        url, 
        loginUrl, 
        username,
        password,
        notes,
    } = req.body
  
    const access = await Access.create({
        creator,
        type,
        url, 
        loginUrl, 
        username,
        password,
        notes,
    })
  
    if(access) {
      res.status(201).json('Access has been created')
    } else {
      res.status(401)
      throw new error('Invalid...')
    }
})

const getAccessListByCretorId = asyncHandler( async (req, res) => {
  const creatorId = req.params.id
  const access = await Access.find({ "creator": creatorId })
  
  if(access) {
    res.json(access)
  } else {
    res.status(404)
    throw new Error('Access not found')
  }
})

const getAccessById = asyncHandler( async (req, res) => {
  const access = await Access.findById(req.params.id)
  
  if(access) {
    res.json(access)
  } else {
    res.status(404)
    throw new Error('Access not found')
  }
})

export { createAccess, getAccessListByCretorId, getAccessById }
