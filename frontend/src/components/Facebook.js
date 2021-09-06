import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login';
import { ImFacebook2 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginSocial } from '../actions/userActions';

const Facebook = () => {
    const dispatch = useDispatch()
    
	const responseFacebook = (response) => {

        if (response) {
            dispatch(loginSocial(response))
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