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
	updateUserPassword,
	authUserSocial
} from '../controllers/userController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, adminOnly, getUsers)
router
	.route('/:id')
	//.get(protect, adminOnly, getUserById)
	.get(getUserById)
	//.put(protect, adminOnly, updateUser)
	.put(updateUser)
	.delete(protect, adminOnly, deleteUser)
	.patch(protect, updateUserPassword)

router.post('/login', authUser)
router.post('/login/social', authUserSocial)
router.route('/profile').get(protect, getUserProfile)


export default router