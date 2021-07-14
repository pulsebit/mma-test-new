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
import * as auth from '../controllers/authController.js';


router.route('/')
  .post(registerUser)
  .get(getUsers)
router
     .route('/:id')
     .get(protect, adminOnly, getUserById)
		 .put(protect, adminOnly, updateUser)
		 .delete(protect, adminOnly, deleteUser)
		 .patch(protect, updateUserPassword)

router.post('/login', authUser)
router.post('/auth-google', auth.authGoogle)
router.route('/profile').get(protect, getUserProfile)
router.post('/logout', auth.authLogout)

export default router