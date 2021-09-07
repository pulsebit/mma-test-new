import React, { useEffect } from 'react'
import FacebookLogin from 'react-facebook-login';
import { ImFacebook2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser, loginSocial } from '../actions/userActions';

const Facebook = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const userLoginSocial = useSelector(state => state.userLoginSocial)
    const { userInfoSocial  } = userLoginSocial
    

    const { success: successCreate } = useSelector(state => state.userCreate)

    useEffect(() => {
		if (userInfoSocial) {
			history.push("/portal/reports");
		}

	}, [history, userInfoSocial])
    
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

            dispatch(loginSocial(email))
            if (userInfoSocial) {
                history.push("/portal")
            } else {
                dispatch(createUser(isAdmin, socialId, name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink, socialId))
            }
            // if (userInfo) {
            //     dispatch(loginSocial(email))
            //     console.log("login already")
            // } else {
            //     if (response) {
            //         dispatch(createUser(isAdmin, socialId, name, email, password, mobile_no, creator, gender ,birthdate, address, state, zipcode, country, dataStudioLink, socialId))
            //         history.push("/portal")
            //     }
            // }
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