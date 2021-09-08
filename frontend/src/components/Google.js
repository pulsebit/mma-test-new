import { EpsBankElement } from '@stripe/react-stripe-js';
import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux';
import { createUser, loginSocial } from '../actions/userActions';

const Google = () => {
    const dispatch = useDispatch()

    const responseGoogle = (response) => {
		const isAdmin = false
        if (response.Rs) {
            var name = response.Rs.Qe 
            var email = response.Rs.Ct 
        } else if (response.Ws) {
            var name = response.Ws.Qe
            var email = response.Ws.Ht
        } 
        const password = ""
        const mobile_no = ""
        const creator = ""
        const gender = ""
        const birthdate = ""
        const address = ""
        const state = ""
        const zipcode = ""
        const country = ""
        const dataStudioLink = ""
        const socialId = response.googleId

        console.log(socialId)
            
        if (response) {
            dispatch(createUser(isAdmin, socialId, name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink))
        }
	}

    return (
        
        <GoogleLogin
                clientId="856681189026-0ccm3tjhe2fd1fddatvh4skmhb893pcd.apps.googleusercontent.com" //CLIENTID
                buttonText={"LOGIN WITH GOOGLE"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="btnGoogle"
            >
            <span>Sign In with Google</span>                                                               
        </GoogleLogin>
            
    )
}

export default Google
