import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from 'store/actions/userActions'
import FormContainer from 'components/FormContainer'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login';
import * as env from 'env';
import { FcGoogle } from "react-icons/fc";
import * as S from './styled';
import LoginImage from 'assets/images/login-image.png'


const Login = ({ location }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
  	e.preventDefault()
  	dispatch(login(email, password))
  } 

	const responseGoogle = (response) => {
		console.log(response.googleId);
		console.log(response);
	}

	const responseFacebook = (response) => {
		console.log(response);
		console.log(response.userID);
	}

	return (
		<div className='container login-wrapper dpa-tb-60'>
			<div className="row">
				<div className="col-md-6 col-12 p-0">
					<img style={{height: '100%'}} src={LoginImage} />
				</div>
				<div className="col-md-6 col-12">
					<S.LoginRight className="login-right">
						<h3>Sign In</h3>
						<form onSubmit={submitHandler}> 
							<Form.Group>
								<S.FormLabel className="form-label">Email Address</S.FormLabel>
								<S.Input
									className="form-control"
									type='email'
									placeholder='Enter email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></S.Input>
							</Form.Group>
							<Form.Group>
								<S.FormLabel className="form-label">Password</S.FormLabel>
								<S.Input
									className="form-control"
									type='password'
									placeholder='Enter password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								></S.Input>
							</Form.Group>

							<S.SubmitBtn type='submit' className="btn btn-primary">
								Sign In
							</S.SubmitBtn>

							<S.ThirdPartyWrapper>
								<S.Divider><span></span>or<span></span></S.Divider>
								<GoogleLogin
									clientId={env.GOOGLE_CLIENT_ID}
									buttonText="Login"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
									render={renderProps => (
										<button className="btn" disabled={renderProps.disabled}>
											<FcGoogle /> Sign in with Google
										</button>
									)}
								/>
								<FacebookLogin
									appId={env.FACEBOOK_APP_ID}
									autoLoad={true}
									fields="name,email,picture"
									callback={responseFacebook}
									cssClass="btn facebook-login"
								/>
								<FacebookLogin
									appId={env.FACEBOOK_APP_ID}
									autoLoad={true}
									fields="name,email,picture"
									callback={responseFacebook}
									cssClass="btn facebook-login"
								/>
							</S.ThirdPartyWrapper>

						</form>
					</S.LoginRight>
				</div>
			</div>
		</div>
	)
}

export default Login