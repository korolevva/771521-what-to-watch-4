import * as React from "react";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducers/user/user";
import {Operation as DataOperation} from "../../actions/dataActions";
import history from "../../history";

interface Props {
  id: number,
  isFavorite: boolean,
  authorizationStatus: string,
  onFavoriteButtonClick: (id: number, isFavorite: boolean) => void,
}

const AddMyListButton: React.FunctionComponent<Props> = ({id, isFavorite, authorizationStatus, onFavoriteButtonClick}) => {
  const handleFavoriteButtonClick = () => {
    return authorizationStatus === AuthorizationStatus.AUTH
      ? onFavoriteButtonClick(id, isFavorite)
      : history.push(AppRoute.LOGIN);
  };

  return (
    <button onClick={() => handleFavoriteButtonClick()} className="btn btn--list movie-card__button" type="button">
      {(isFavorite)
        ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
      }
      <span>My list</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, isFavorite) {
    dispatch(DataOperation.sendFavoriteMovie(id, isFavorite));
  },
});

export default connect(null, mapDispatchToProps)(AddMyListButton);

