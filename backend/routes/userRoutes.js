import express from 'express'
const router = express.Router()
import { 
	authUser,
	registerUser,
	getUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser
} from '../controllers/userController.js'
import  { protect, adminOnly } from '../middleware/authMiddleware.js'


router.route('/').post(registerUser).get(protect, adminOnly, getUsers)
router
     .route('/:id')
     .get(protect, getUserById)
		 .put(protect, updateUser)
		 .delete(protect, deleteUser)

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)


export default router