import React, {useState, useEffect} from 'react'
import  { Link, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

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
		  console.log("true")
		  history.push("/admin");
	  } else if (isAdmin == false) {
		  console.log("false")
		  history.push("/portal/reports");
	  }
  	 
  }, [history, userInfo])

  const submitHandler = (e) => {
  	e.preventDefault()

  	//Dispatch Login
  	dispatch(login(email, password))
  } 

	return (
		<div className='login-wrapper dpa-tb-60'>
			<FormContainer>
				<h1>Sign In</h1>
				{error && <Message variant='danger'>{error}</Message>}
				{loading && <Loader />}
				<Form onSubmit={submitHandler}> 
					<Form.Group>
						<Form.Label>Email Address</Form.Label>
						<Form.Control
					type='email'
					placeholder='Enter email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
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

					<Row className='py-3'>
				<Col>
					New Customer ? {' '}
					{/* <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}></Link>	 */}
				</Col>			
					</Row>
				</Form>
			</FormContainer>
		</div>
	)
}

export default LoginScreen