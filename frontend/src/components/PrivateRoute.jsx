import React from 'react';
import { auth } from 'helpers/auth';
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ children, ...rest}) {
  return (
    <Route 
      {...rest}
      render={({ location }) => 
        auth.isAuthenticated ? (
          children
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
      )}
    />
  )
}
