import React, {useState} from 'react'
import { Form } from 'react-bootstrap'
import Google from './Google'
import Facebook from './Facebook'
import * as S from './styled';
import LoginImage from 'assets/images/login-image.png'
import Layout from 'components/Layout'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { authChanges } from 'store/actions/authActions';
import { useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const Login = ({ location }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const [disableBtn, setDisableBtn] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();
  const history = useHistory();

  const submitHandler = React.useCallback(async (e) => {
  	e.preventDefault();
    try {
      setDisableBtn(true);
      setError(null);
      const { data } = await axios.post('/api/users/login', { email, password });
      setDisableBtn(false);
      if (!data.error) {
        authChanges(data);
        history.push('/admin/dashboard');
      } else {
        setError(data.error);
      }
    }
    catch(err) {
      setDisableBtn(false);
      setError('Error: ' + err.message);
    }
  }, [email, password, history]);

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

	return (
    <Layout sidebar={false} header={true}>
      <div className='container login-wrapper dpa-tb-60'>
        <div className="row">
          <div className="col-md-6 col-12 p-0">
            <img style={{height: '100%'}} src={LoginImage} alt="Login" />
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
                    required
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
                    required
                  ></S.Input>
                </Form.Group>

                <S.SubmitBtn disabled={disableBtn} type='submit' className="btn btn-primary">
                  Sign In
                </S.SubmitBtn>

                <p className="text-danger text-medium text-center mt-4">
                  {error}
                </p>

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