import asyncHandler from 'express-async-handler'
import Note from '../models/NoteModel.js'

// @desc   Create Note
// @route  POST /api/note/
// @access private
const createNote = asyncHandler( async (req, res) => {
    const { 
        clientInfo, 
        supportInfo, 
        creatorInfo,
        assigneeInfo,
        note,
    } = req.body
  
    const product = await Note.create({
        clientInfo, 
        supportInfo, 
        creatorInfo,
        assigneeInfo,
        note,
    })
  
    if(product) {
      res.status(201).json('Note has been created')
    } else {
      res.status(401)
      throw new error('Invalid...')
    }
})

// @desc   Fetch all notes 
// @route  GET /api/products
// @access Public
const getNotes = asyncHandler( async (req, res) => {
    const notes = await Note.find({})

    res.json(notes)
})

// @desc   Fetch all notes within the support id
// @route  GET /api/notes/:id
// @access Public
const getNotesUnderSupport = asyncHandler( async (req, res) => {
    const notes = await Note.find({supportInfo: req.params.id}).populate('supportInfo').populate('clientInfo').populate('creatorInfo').populate('assigneeInfo')

    res.json(notes) 
})

const deleteNote = asyncHandler(async (req, res) => {
    //const { noteId } = req.body
	const note = await Note.findById(req.params.id)

	if(note) {
		  await note.remove()
			res.json({ message: 'Note removed successfully!'})
	} else {
			res.status(404)
			throw new Error('Note not found')
	}
})

export { createNote, getNotesUnderSupport, getNotes, deleteNote }
