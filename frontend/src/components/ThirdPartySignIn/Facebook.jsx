import React from 'react'
import { connect } from 'react-redux'
import * as env from 'env';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios';
import { FaFacebookF } from 'react-icons/fa';
import * as auth from 'store/constants/authConstants';
import { authChanges } from 'store/actions/authActions';
import { useHistory } from 'react-router-dom';

export const Facebook = (props) => {
  const history = useHistory();
  
  const responseFacebook = React.useCallback(async (fbRes) => {
    try {
      props.removeAuthMessage();
      if (fbRes.status === 'unknown') return;
      const { email, userID, picture, name } = fbRes;
      const { data } = await axios.post('/api/users/auth-fb', { email, userID, picture: picture.data.url, name });
      if (data.error) {
        props.changeAuthMessage({ message: data.error, type: 'login' });
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
      props.changeAuthMessage({ message: err.message, type: 'login' });
    }
  }, [history, props]);

  return (
    <FacebookLogin
      appId={env.FACEBOOK_APP_ID}
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <button type="button" className="btn facebook" onClick={renderProps.onClick}>
          <FaFacebookF/> {props.buttonText || 'Sign up with Facebook'}
        </button>
      )}
    />
  )
  
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => {
  return {
    changeAuthMessage: (payload) => dispatch({ type: auth.CHANGE_MESSAGE, payload }),
    removeAuthMessage: () => dispatch({ type: auth.REMOVE_MESSAGE }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
