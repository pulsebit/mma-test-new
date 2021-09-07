import React, {useState, useEffect} from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import { AiOutlineUser, AiOutlineUnlock } from 'react-icons/ai';

const LoginScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const history = useHistory()

	const dispatch = useDispatch()

	const userLogin = useSelector(state => state.userLogin)
	const { loading, error, userInfo = {} } = userLogin || {}
	const { isAdmin = {} } = userInfo || {}
  
	useEffect(() => {
		if (isAdmin == true) {
			history.push("/admin");
		} else if (isAdmin == false) {
			history.push("/portal/reports");
		}

	}, [history, userInfo])

	const submitHandler = (e) => {
		e.preventDefault()

		//Dispatch Login
		dispatch(login(email, password))
	} 

	return (
		<div className='login-wrapper'>
			<FormContainer>
				<div className="reg-wrapper">
					<span>Dont have an account yet?</span>
					<NavLink to="/register">Create Account</NavLink>
				</div>
				<h2>Sign In</h2>
				{error && <Message variant='danger'>{error}</Message>}
				{loading && <Loader />}
				<Form onSubmit={submitHandler}> 
					<Form.Group >
						<Form.Label ><AiOutlineUser /></Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group >
						<Form.Label ><AiOutlineUnlock/></Form.Label>
						<Form.Control
							type='password'
							placeholder='Enter password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Button type='submit' variant='primary'>
						Sign In
					</Button>
					<div className="divider">or</div>
						<Facebook />
						<Google />
					<div className="social-btn-wrapper">
						
					</div>
				</Form>
			</FormContainer>
		</div>
	)
}

export default LoginScreen