import React from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from "react-icons/fc";
import * as env from 'env';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { authChanges } from 'store/actions/authActions';
 
export const Google = () => {
  const history = useHistory();

  const responseGoogle = React.useCallback(async (response) => {
    try {
      const { tokenId } = response;
      const { data } = await axios.post('/api/users/auth-google', { tokenId });
      if (data) {
        const payload = {
          user_id: data.user_id,
          access_token: data.access_token,
          id_token: data.id_token,
          isAuthenticated: data.isAuthenticated || false,
        }
        authChanges(payload);
        setTimeout(() => {
          history.push('/admin/dashboard');
        }, 300);
      }
    }
    catch(err) {
      console.log(err);
    }
	}, [history]);

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
