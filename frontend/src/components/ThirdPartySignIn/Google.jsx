import React from 'react'
import { connect } from 'react-redux'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from "react-icons/fc";
import * as env from 'env';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { authChanges } from 'store/actions/authActions';
import * as auth from 'store/constants/authConstants';
 
export const Google = (props) => {
  const history = useHistory();

  const responseGoogle = React.useCallback(async (response) => {
    try {
      if (response.error) return;
      props.removeAuthMessage();
      const { tokenId } = response;
      const { data } = await axios.post('/api/users/auth-google', { tokenId });
      if (data.error) {
        props.changeAuthMessage(data.error);
        return;
      }
      if (data) {
        const payload = {
          user_id: data.user_id,
          access_token: data.access_token,
          id_token: data.id_token,
          isAuthenticated: data.isAuthenticated || false,
        }
        authChanges(payload);
        setTimeout(() => {
          history.push(props.redirectTo || '/admin/dashboard');
        }, 300);
      }
    }
    catch(err) {
      props.changeAuthMessage(err.message);
    }
	}, [history]);

  return (
    <GoogleLogin
      clientId={env.GOOGLE_CLIENT_ID}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <button type="button" className="btn" 
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}>
          <FcGoogle /> {props.buttonText || 'Sign up with Google'}
        </button>
      )}
    />
  )
}

const mapStateToProps = (state) => ({ })

const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthMessage: (payload) => dispatch({ type: auth.CHANGE_MESSAGE, payload }),
    removeAuthMessage: () => dispatch({ type: auth.REMOVE_MESSAGE }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Google)
