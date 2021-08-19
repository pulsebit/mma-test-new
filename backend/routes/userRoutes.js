import express from 'express'
const router = express.Router()
import { 
	authUser,
	registerUser,
	getUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
	updateUserPassword
} from '../controllers/userController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'

//get(protect, adminOnly, getUsers)
router.route('/').post(registerUser).get(getUsers)
router
	.route('/:id')
	.get(protect, adminOnly, getUserById)
	//.put(protect, adminOnly, updateUser)
	.put(updateUser)
	.delete(protect, adminOnly, deleteUser)
	.patch(protect, updateUserPassword)

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)


export default router