import React, { useEffect, useState } from 'react'
import { AiOutlineUser, AiOutlineUnlock, AiOutlineMail } from 'react-icons/ai';
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../actions/userActions'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContainer from '../components/FormContainer'
import { NavLink } from 'react-router-dom'



const RegisterScreen = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [mobile_no, setMobile_no] = useState('')
    // const [gender, setGender] = useState('')
    // const [birthdate, setBirthdate] = useState('')
    // const [address, setAddress] = useState('')
    // const [state, setState] = useState('')
    // const [zipcode, setZipcode] = useState('')
    // const [country, setCountry] = useState('')
    // const [dataStudioLink, setDataStudioLink] = useState('') 

    const isAdmin = false
    const socialId = ""

    const {loading: loadingCreate, success:successCreate} = useSelector(state => state.userCreate)

    useEffect(() => {
        if(successCreate) {
            toast.success('Profile successfully added.',{
                position: "bottom-right",});
        }
    }, [dispatch, successCreate] )

    const onSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(createUser(socialId, isAdmin, name, email, password))
       //, mobile_no, gender ,birthdate, address, state, zipcode, country, dataStudioLink
    }

	return (
		<div className='login-wrapper register'>
			<FormContainer>
                <div className="reg-wrapper">
                    <span>Already have an account?</span>
                    <NavLink to="/">Sign in</NavLink>
                </div>
                <h2>Sign up</h2>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group >
						<Form.Label ><AiOutlineUser /></Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Form.Control>
					</Form.Group>
                    <Form.Group >
						<Form.Label ><AiOutlineMail /></Form.Label>
						<Form.Control
							type='email'
							placeholder='Enter email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></Form.Control>
					</Form.Group>
					<Form.Group >
						<Form.Label ><AiOutlineUnlock /></Form.Label>
						<Form.Control
							type='password'
							placeholder='Enter password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></Form.Control>
					</Form.Group>
                        <Button type='submit' variant='primary'>
                            Sign up
                        </Button>
                        <ToastContainer />
                </Form>
			</FormContainer>
		</div>
	)
}

export default RegisterScreen