import * as React from "react";
import {Fragment} from "react";
import {AuthorizationStatus} from "../../reducers/user/user";
import {Link} from "react-router-dom";
import {AppRoute} from '../../const';
import {User} from "../../types";

interface Props {
  authorizationStatus: string,
  user: User;
}

const Header: React.FunctionComponent<Props> = ({authorizationStatus, user}:Props) => {
  return (
    <Fragment>
      <header className="page-header movie-card__head">
        <div className="logo">
          <Link to={AppRoute.ROOT} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {authorizationStatus === AuthorizationStatus.AUTH
          ?
          <div className="user-block">
            <Link to={AppRoute.MY_LIST}>
              <div className="user-block__avatar">
                <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </div>
          :
          <div className="user-block">
            <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
          </div>
        }
      </header>
    </Fragment>
  );
};

export default Header;

