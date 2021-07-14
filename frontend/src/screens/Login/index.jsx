import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Google from './Google'
import Facebook from './Facebook'
import * as S from './styled';
import LoginImage from 'assets/images/login-image.png'
import Layout from 'components/Layout'
import { auth } from 'helpers/auth';
import { Redirect } from 'react-router-dom';

const Login = ({ location }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

  const submitHandler = (e) => {
  	e.preventDefault()
  } 

  if (auth.isAuthenticated) {
    return <Redirect to="/" />
  }

	return (
    <Layout sidebar={false} header={true}>
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
                  <Google />
                  <Facebook />   
                </S.ThirdPartyWrapper>

              </form>
            </S.LoginRight>
          </div>
        </div>
      </div>
    </Layout>
	)
}

export default Login