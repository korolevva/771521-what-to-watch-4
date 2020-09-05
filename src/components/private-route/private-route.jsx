import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../reducers/user/user";
import {AppRoute} from "../../const.js";


const PrivateRoute = (props) => {
  const {authorizationStatus, exact, path, render} = props;
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        if (isAuth) {
          return render(routeProps);
        }

        return <Redirect to={`${AppRoute.LOGIN}`} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export default PrivateRoute;
