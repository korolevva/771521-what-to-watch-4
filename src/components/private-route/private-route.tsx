import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../reducers/user/user";
import {AppRoute} from "../../const";

interface Props {
  authorizationStatus: string,
  exact?: boolean,
  path: string,
  render: React.FunctionComponent,
}

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
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

export default PrivateRoute;
