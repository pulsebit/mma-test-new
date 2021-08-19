import mongoose from 'mongoose'
import Support from './supportModel.js'
import User from './userModel.js'

const noteSchema = mongoose.Schema({
    supportInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Support'
    },
    clientInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    creatorInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    assigneeInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    note: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema)

export default Note