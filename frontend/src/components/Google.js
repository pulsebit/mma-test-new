import React from 'react'
import GoogleLogin from 'react-google-login';
import { ImGooglePlus } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { loginSocial } from '../actions/userActions';

const Google = () => {
    const dispatch = useDispatch()

    const responseGoogle = (response) => {
		if (response) {
            dispatch(loginSocial(response))
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
