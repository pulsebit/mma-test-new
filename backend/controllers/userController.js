import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'

// @desc   Auth user & get token
// @route  GET /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body

    const user = await User.findOne({ email })

    if(user && (await user.matchPassword(password))) {
        res.json({
   				_id: user._id,
   				name: user.name,
   				email: user.email, 
   				isAdmin: user.isAdmin, 
   				token: generateToken(user._id),
				mobile_no: user.mobile_no,
				gender: user.gender,
				birthdate: user.birthdate,
				address: user.address,
				state: user.state,
				zipcode: user.zipcode,
				country: user.country,
				business_name: user.business_name,
				isAdmin: user.isAdmin,
				planCreated: user.planCreated,
				subscribedPlan: user.subscribedPlan
        })
    } else {
    	res.status(401)
    	throw new Error('Invalid Email or Password')
    }
})


// @desc   Register new user
// @route  GET /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
   const { name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink } = req.body
        console.log(name)
    const userExists = await User.findOne({ email })

    if(userExists) {
    	 res.status(400)
    	 throw new Error('User already exists')
    } 

    const user = await User.create({name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink})

    if(user) {
    	 res.status(201).json({
     			_id: user._id,
   				name: user.name,
   				email: user.email, 
   				isAdmin: user.isAdmin, 
   				token: generateToken(user._id),

    	 })
    } else {
    	res.status(401)
    	throw new error('Invalid user data')
    }
})


// @desc   Get User Profile
// @route  GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  
   const user = await User.findById(req.user._id )

   if(user) {
   	  res.json({
        _id: user._id,
   		name: user.name,
   		email: user.email, 
   		isAdmin: user.isAdmin, 
   	  })
   } else {
	   	res.status(404)
	   	throw new Error('User not found')
   }
})


// @desc   Get All Users
// @route  GET /api/users/
// @access Private
const getUsers = asyncHandler(async (req, res) => {
   const users = await User.find({})
   res.json(users)
})

// @desc   Update User Profile
// @route  PUT /api/users/:id
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  
	const user = await User.findById(req.user._id )

	if(user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email
		if(req.body.password) {
			user.password = req.body.password
		}

		const updatedUser = await user.save()


		res.json({ 	
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: generateToken(updatedUser._id)
		})

	} else {
			res.status(404)
			throw new Error('User not found')
	}
})

// @desc   Get User By Id
// @route  GET /api/users/:id
// @access Private
const getUserById = asyncHandler(async (req, res) => {
  
	const user = await User.findById(req.params.id ).select('-password').populate('creator')

	if(user) {
			res.json(user)
	} else {
			res.status(404)
			throw new Error('User not found')
	}
})

// @desc   Delete user
// @route  Delete /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  
	const user = await User.findById(req.params.id)

	if(user) {
		  await user.remove()
			res.json({ message: 'User removed successfully!'})
	} else {
			res.status(404)
			throw new Error('User not found')
	}
})


// @desc   Update user
// @route  PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  
	const user = await User.findById(req.params.id )

	if(user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email
		user.mobile_no = req.body.mobile_no || user.mobile_no
		user.gender = req.body.gender || user.gender
		user.birthdate = req.body.birthdate || user.birthdate
		user.address = req.body.address || user.address
		user.dataStudioLink = req.body.dataStudioLink || user.dataStudioLink
		if(req.body.password) {
			user.password = req.body.password
		}
		

		const updatedUser = await user.save()


		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			mobile_no: user.mobile_no,
			gender: user.gender,
			birthdate: user.birthdate,
			address: user.address,
			dataStudioLink: user.dataStudioLink,
		})

	} else {
			res.status(404)
			throw new Error('User not found')
	}
})


// @desc   Update user password
// @route  PUT /api/users/:id
// @access Private
const updateUserPassword = asyncHandler(async (req, res) => {
  
	const user = await User.findById(req.params.id )

	if(user) {
			if(req.body.password) {
				user.password = req.body.password
			}

			const updatedUserPassword = await user.save()
      
			res.json({ message: 'Password has been successfully updated!'})

	} else {
			res.status(404)
			throw new Error('User not found')
	}
})



export {
	authUser, 
	getUserProfile, 
	registerUser, 
	getUsers, 
	getUserById, 
	updateUser,
	deleteUser, 
	updateUserProfile,
	updateUserPassword
}