import React, { useEffect, useState } from 'react'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../actions/userActions'
import DashboardContainer from '../../components/DashboardContainer'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserAddScreen = () => {
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

    const { userInfo } = useSelector(state => state.userLogin)
    const isAdmin = userInfo.isAdmin
    const socialId = ""

    const {loading: loadingCreate, success:ssuccessCreate} = useSelector(state => state.userCreate)

    useEffect(() => {
        if(ssuccessCreate) {
            toast.success('Profile successfully added.',{
                position: "bottom-right",});
        }
    }, [dispatch, ssuccessCreate] )

    const onSubmitHandler = (e) => {
        e.preventDefault()
       dispatch(createUser(socialId, isAdmin, name, email, password, mobile_no, gender ,birthdate, address, state, zipcode, country, dataStudioLink))
    }

    return (
        <div>
            <div className="edit-screen">
                <Form onSubmit={onSubmitHandler}>
                    <DashboardContainer>
                            <div className="section-wrapper">
                                <div className="dashboard-title-wrapper">
                                    <div className="dashboard-title">Add User</div>
                                </div>
                                {/* <div className="img-wrapper">
                                    <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="" />
                                </div> */}
                                <Row>
                                    <Col md={12}>
                                        <div className="fill-up">
                                            <Row>
                                                <Col md={6}>
                                                    <div className="details-wrapper">
                                                        <label>Full Name</label>
                                                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                    </div>
                                                    <div className="details-wrapper">
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
                                                </Col>
                                                <Col md={6}>                                                    
                                                    <div className="details-wrapper">
                                                        <label>Address</label>
                                                        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                                    </div>  
                                                    <div className="details-wrapper">
                                                        <label>State</label>
                                                        <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/>
                                                    </div>    
                                                    <div className="details-wrapper">
                                                        <label>Zip Code</label>
                                                        <input type="text" value={zipcode} onChange={(e)=>setZipcode(e.target.value)}/>
                                                    </div>    
                                                    <div className="details-wrapper">
                                                        <label>Country</label>
                                                        <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                                                    </div>
                                                    <div className="details-wrapper">
                                                        <label>Data Studio Link</label>
                                                        <input type="url" value={dataStudioLink} onChange={(e)=>setDataStudioLink(e.target.value)}/>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            <div className="button-wrapper j-c-end def-padding">
                                <button type="submit" className='save-btn'><FontAwesomeIcon icon={faSave}/>Save</button>
                            </div>
                            <ToastContainer />
                    </DashboardContainer>
                </Form> 
            </div>
        </div>
    )
}

export default UserAddScreen
