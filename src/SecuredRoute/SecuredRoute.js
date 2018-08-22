import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Auth';

function SecuredRoute({ component: Component, ...rest }) {
  return (
    <Route {...rest} render={(props) => {
      if (!auth0Client.isAuthenticated()) return auth0Client.signIn();
      return <Component {...props} />
    }} />
  );
}

export default SecuredRoute;
