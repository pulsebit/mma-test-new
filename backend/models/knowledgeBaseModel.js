import mongoose from 'mongoose'

const knowledgeBaseSchema = mongoose.Schema({
    problem_description: {
        type: String,
        required: true,
    },
    solution: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    resolve_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

const KnowledgeBase = mongoose.model('KnowledgeBase', knowledgeBaseSchema)

export default KnowledgeBase