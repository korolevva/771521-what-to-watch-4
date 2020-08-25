import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducers/user/user";

const Header = ({authorizationStatus, onSignInClick}) => {
  return (
    <Fragment>
      <header className="page-header movie-card__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        {authorizationStatus === AuthorizationStatus.AUTH
          ?
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
          :
          <div className="user-block">
            <a href="sign-in.html" className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                onSignInClick();
              }}
            >Sign in</a>
          </div>
        }
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default Header;

