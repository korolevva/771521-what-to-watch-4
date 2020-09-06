import * as React from "react";
import {Fragment} from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducers/user/user";
import {Link} from "react-router-dom";
import {AppRoute} from '../../const';

const Header = ({authorizationStatus, user}) => {
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

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default Header;

