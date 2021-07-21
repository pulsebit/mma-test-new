import React from 'react'
import { connect } from 'react-redux'
import * as env from 'env';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios';
import { FaFacebookF } from 'react-icons/fa';

export const Facebook = () => {

  const responseFacebook = React.useCallback(async (fbRes) => {
    // const { email, userID, picture, name } = fbRes;
    // const res = await axios.post('/api/users/auth-fb', { email, userID, picture: picture.data.url, name });
    // console.log(res.data);
    console.log(fbRes)
  }, []);

  return (
    <FacebookLogin
      appId={env.FACEBOOK_APP_ID}
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <button type="button" className="btn facebook" onClick={renderProps.onClick}>
          <FaFacebookF/> Sign up with Facebook
        </button>
      )}
    />
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
