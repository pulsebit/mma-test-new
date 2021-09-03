import React, { useEffect, useState } from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../actions/userActions'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContainer from '../components/FormContainer'



const RegisterScreen = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile_no, setMobile_no] = useState('')
    const [gender, setGender] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [country, setCountry] = useState('')
    const [dataStudioLink, setDataStudioLink] = useState('') 

    const {loading: loadingCreate, success:ssuccessCreate} = useSelector(state => state.userCreate)

    useEffect(() => {
        if(loadingCreate) {
            toast.success('Profile successfully added.',{
                position: "bottom-right",});
        }
    }, [dispatch, loadingCreate] )

    const onSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(createUser(name, email, password, mobile_no, gender ,birthdate, address, state, zipcode, country, dataStudioLink))
    }

	return (
		<div className='login-wrapper register'>
			<FormContainer>
                <h2>Sign up</h2>
                <Form onSubmit={onSubmitHandler}>
                    <div className="edit-screen">
                        <div className="details-wrapper">
                            <label>Full Name</label>
                            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <Row>
                            <Col md={4}>
                                <div className="details-wrapper-flex">
                                    <label>Birthdate</label>
                                    <input type="text" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)} />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="details-wrapper-flex">
                                    <label>Gender</label>
                                    <span>
                                        <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                            <option value="N/A"></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </span>
                                </div>   
                            </Col>
                        </Row>
                        
                        <div className="details-wrapper">
                            <label>Email (Login Username)</label>
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="details-wrapper">
                            <label>Password (Login Password)</label>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div className="details-wrapper">
                            <label>Mobile Number</label>
                            <input type="tel" value={mobile_no} onChange={(e)=>setMobile_no(e.target.value)}/>
                        </div>                                         
                        <div className="details-wrapper">
                            <label>Address</label>
                            <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                        </div>  
                        <Row>
                            <Col md={4}>
                                <div className="details-wrapper-flex">
                                    <label>State</label>
                                    <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="details-wrapper-flex">
                                    <label>Zip Code</label>
                                    <input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)} />
                                </div>    
                            </Col>
                            <Col md={4}>
                                <div className="details-wrapper-flex">
                                    <label>Country</label>
                                    <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} />
                                </div>
                            </Col>
                        </Row>
                        <div className="details-wrapper">
                            <label>Data Studio Link</label>
                            <input type="url" value={dataStudioLink} onChange={(e)=>setDataStudioLink(e.target.value)} />
                        </div>
                        <button type="submit" className='save-btn mar-tb-20 w-100'>Submit</button>
                        <ToastContainer />
                    </div>
                </Form>
			</FormContainer>
		</div>
	)
}

export default RegisterScreen