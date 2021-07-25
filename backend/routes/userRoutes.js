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
  .get(protect, getUsers)
// router
//      .route('/:id')
//      .get(protect, adminOnly, getUserById)
// 		 .put(protect, adminOnly, updateUser)
// 		 .delete(protect, adminOnly, deleteUser)
// 		 .patch(protect, updateUserPassword)

router.post('/login', auth.authSignin)
router.post('/auth-google', auth.authGoogle)
router.post('/auth-fb', auth.authFb)
router.post('/register', auth.registerUser)

router.post('/profile', protect, auth.updateProfile)
router.post('/update-profile-picture', protect, auth.updateProfilePicture)
router.post('/check-email', auth.checkEmailIfExists)

// router.route('/profile')
//   .get(protect, getUserProfile)
//   .get(protect, auth.updateProfile)
router.post('/logout', auth.authLogout)

export default router