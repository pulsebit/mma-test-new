import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import RegisterBg from 'assets/images/register.jpeg'
import * as S from './indexStyle';
import * as G from 'style/global'
import { useForm } from "react-hook-form";
import ThirdPartySignIn from 'components/ThirdPartySignIn';
import validateEmail from 'helpers/validateEmail';
import axios from 'axios';
import * as auth from 'store/constants/authConstants';
import { authChanges } from 'store/actions/authActions';
import { Link, Redirect, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

export const Index = (props) => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = React.useState('');
  const [emailErrorMessage, setEmailErrorMessage] = React.useState(null);
  const [disableSubmit, setDisableSubmit] = React.useState(false);
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const onRegisterSubmit = React.useCallback(async (form) => {
    try {
      const payload = {...form, email};
      setDisableSubmit(true);
      props.removeAuthMessage();
      if (payload.password !== payload.confirm_password) {
        props.changeAuthMessage({ message: 'Password does not match.', type: 'register' });
        setDisableSubmit(false);
        return;
      }
      const { data } = await axios.post('/api/users/register', payload);
      if (!data.success) {
        setDisableSubmit(false);
        props.changeAuthMessage({ message: data.message, type: "register" });
      } else {
        props.removeAuthMessage();
        authChanges(data);
        setTimeout(() => {
          history.push('/admin/dashboard');
        }, 300);
      }
    }
    catch(err) {
      setDisableSubmit(false);
      props.changeAuthMessage({ message: 'Error: ' + err.message, type: 'register' });
    }
  }, [history, props, email]);

  const handleEmailChange = React.useCallback(async (e) => {
    const { value: email } = e.target;
    setEmail(email);
    setEmailErrorMessage(null);
    if (validateEmail(email)) {
      const { data } = await axios.post('/api/users/check-email', { email });
      if (data) {
        setEmailErrorMessage(data.message);
      }
    } else {
      setEmailErrorMessage('Invalid email address.');
    }
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <FormWrapper>
      <S.Form onSubmit={handleSubmit(onRegisterSubmit)}>
        <Tops/>
        <FormGroup label="Name">
          <G.Input className="form-control" placeholder="Name" required
            {...register("name")} />
        </FormGroup>
        <FormGroup label="Email Address">
          <G.Input type="email" className="form-control" placeholder="Email Address" required
            value={email}
            onChange={handleEmailChange}
          />
          {emailErrorMessage && (
            <S.EmailExists className="text-danger py-2">
              {emailErrorMessage}
            </S.EmailExists>
          )}
        </FormGroup>
        <FormGroup label="Password">
          <G.Input type="password" className="form-control" placeholder="Password" required minLength="6"
            {...register("password")}
          />
        </FormGroup>
        <FormGroup label="Confirm Password">
          <G.Input type="password" className="form-control" placeholder="Confirm Password" required
            {...register("confirm_password")}
          />
        </FormGroup>
        <div className="form-group mt-3">
          <S.Submit 
            className="btn btn-primary" 
            disabled={disableSubmit}
          >Register</S.Submit>
        </div>
        <S.ErrorWrapper>
          {props.authMessage && props.authMessage.type === 'register' && props.authMessage.message}
        </S.ErrorWrapper>
      </S.Form>
    </FormWrapper>
  )
}

const mapStateToProps = (state) => ({ 
  authMessage: state.authMessage,
})
const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthMessage: (payload) => dispatch({ type: auth.CHANGE_MESSAGE, payload }),
    removeAuthMessage: () => dispatch({ type: auth.REMOVE_MESSAGE }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index)

function FormWrapper(props) {
  return (
    <Layout sidebar={false}>
      <div className="container">
        <S.RegisterWrapper>
          <div className="row">
            <div className="col-md-6 p-0">
              <img src={RegisterBg} alt="Register" className="img img-bg" />
            </div>
            <div className="col-md-6 p-0">
              {props.children}
            </div>
          </div>
        </S.RegisterWrapper>
      </div>
    </Layout>
  )
}

function FormGroup(props) {
  return (
    <div className="form-group"> 
      <G.FormLabel>{props.label}</G.FormLabel>
      {props.children}
    </div>
  );
}

function Or(props) {
  return (
    <S.Or>
      <div></div>
      <span>OR</span>
      <div></div>
    </S.Or>
  );
}

function Tops(props) {
  return (
    <>
      <div className="tops">
        <S.Title>Register.</S.Title>
        <S.SubTitle>Already have an account?
          <Link to="/login"> Login.</Link>
        </S.SubTitle>
      </div>
      <ThirdPartySignIn/>
      <Or/>
    </>
  )
}