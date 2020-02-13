import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

// For PublicOnlyRoute, if user IS logged in, will redirect to your plants page
export default function PublicOnlyRoute({ component, render, ...props }) {
  const Component = component || render
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/your-plants'} />
          : <Component {...componentProps} />
      )}
    />
  )
}
