import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, authed, ...rest }) => (
    <Route {...rest} render={(prop) => (
      authed
        ? <Component {...prop} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: prop.location }
          }} />
    )} />
  )

 export default PrivateRoutes;