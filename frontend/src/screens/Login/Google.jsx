import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from "react-icons/fc";
import * as env from 'env';
import axios from 'axios';
import * as constant from 'store/constants/authConstants';

export const Google = (props) => {
  const dispatch = useDispatch();

  const responseGoogle = React.useCallback(async (response) => {
    const { googleId, profileObj, accessToken } = response;
    const { data } = await axios.post('/api/users/auth-google', { googleId, profileObj, accessToken });
		dispatch({
      type: constant.AUTH_DATA,
      payload: {
        userId: data.profile._id,
        accessToken: data.accessToken,
        profile: data.profile,
      }
    });
	}, [dispatch]);

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
