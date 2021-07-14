import React from 'react'
import { connect } from 'react-redux'
import * as env from 'env';
import FacebookLogin from 'react-facebook-login';

export const Facebook = (props) => {
  const responseFacebook = (response) => {
		console.log(response);
		console.log(response.userID);
	}

  return (
    <FacebookLogin
      appId={env.FACEBOOK_APP_ID}
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      cssClass="btn facebook-login"
    />
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Facebook)
