import React from 'react'
import { connect } from 'react-redux'
import Layout from 'components/Layout'
import RegisterBg from 'assets/images/register.jpeg'
import * as S from './indexStyle';
import * as G from 'style/global'
import { useForm } from "react-hook-form";
import ThirdPartySignIn from 'components/ThirdPartySignIn';
import axios from 'axios';
import * as auth from 'store/constants/authConstants';
import { authChanges } from 'store/actions/authActions';
import { Redirect, useHistory, Link } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

export const Index = (props) => {
  const { register, handleSubmit } = useForm();
  const [disableSubmit, setDisableSubmit] = React.useState(false);
  const history = useHistory();
  const { isAuthenticated } = useAuth();

  const onLoginSubmit = React.useCallback(async (form) => {
    try {
      setDisableSubmit(true);
      props.removeAuthMessage();
      const { data } = await axios.post('/api/users/login', form);
      if (!data.success) {
        setDisableSubmit(false);
        props.changeAuthMessage({ message: data.message, type: 'login' });
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
      props.changeAuthMessage({ message: 'Error: ' + err.message, type: 'login'});
    }
  }, [history, props]);

  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <FormWrapper>
      <S.Form onSubmit={handleSubmit(onLoginSubmit)}>
        <Tops/>
        <FormGroup label="Email Address">
          <G.Input type="email" className="form-control" placeholder="Email Address" required
            {...register("email")}
          />
        </FormGroup>
        <FormGroup label="Password">
          <G.Input type="password" className="form-control" placeholder="Password" required
            {...register("password")}
          />
        </FormGroup>
        <div className="form-group mt-3">
          <S.Submit 
            className="btn btn-primary" 
            disabled={disableSubmit}
          >Sign In</S.Submit>
        </div>
        <S.ErrorWrapper>
          {props.authMessage && props.authMessage.type === 'login' && props.authMessage.message}
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
        <S.Title>Sign in.</S.Title>
        <S.SubTitle>New User?
          <Link to="/register"> Sign up here.</Link>
        </S.SubTitle>
      </div>
      <ThirdPartySignIn 
        googleButtonText="Sign in with Google" 
        fbButtonText="Sign in with Facebook" 
      />
      <Or/>
    </>
  )
}