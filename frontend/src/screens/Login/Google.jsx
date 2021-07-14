import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from "react-icons/fc";
import * as env from 'env';
import axios from 'axios';
import * as constant from 'store/constants/authConstants';
import { useHistory } from 'react-router-dom';

export const Google = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const responseGoogle = React.useCallback(async (response) => {
    try {
      const { googleId, profileObj, accessToken } = response;
      const { data } = await axios.post('/api/users/auth-google', { googleId, profileObj, accessToken });
      dispatch({
        type: constant.AUTH_DATA,
        payload: {
          userId: data.user_id,
          access_token: data.access_token,
          id_token: data.id_token,
          isAuthenticated: data.isAuthenticated,
        }
      });
      setTimeout(() => {
        history.push('/admin/dashboard');
      }, 300);
    }
    catch(err) {
      console.log(err);
    }
	}, [dispatch, history]);

  return (
    <GoogleLogin
      clientId={env.GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <button type="button" className="btn" 
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}>
          <FcGoogle /> Sign in with Google
        </button>
      )}
    />
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Google)
