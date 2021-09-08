import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login';
import { ImFacebook2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser, loginSocial } from '../actions/userActions';

const Facebook = () => {
    const dispatch = useDispatch()

	const responseFacebook = (response) => {
        if (response){
            const isAdmin = false
            const name = response.name
            const email = response.email
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
            const socialId = response.id

            dispatch(createUser(isAdmin, socialId, name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink, socialId))
        }
	}

	return (
        <FacebookLogin
            appId={263021298833486}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="btnFacebook"
            icon={<ImFacebook2 />} 
            textButton = "Sign In with Facebook"                                                   
        />
    )
}

export default Facebook