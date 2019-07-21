import React from 'react';
import { connect } from 'react-redux';
import { User } from 'domain/entity/user';
import { FetchResult } from 'presentation/redux/actionTypes';
import { FetchStatus } from 'presentation/redux/FetchStatus';
import { Loading } from 'presentation/components/loading';
import { Dispatch, bindActionCreators } from 'redux';
import { requestUserMe } from 'presentation/redux/userMe/actions';
const styles = require('./styles.scss');

type StateProps = {
  user: User;
  userMeFetchState: FetchResult;
};

export const Login: React.FC<StateProps> = ({
  user,
  userMeFetchState: userMeFetchState
}) => { 
  const renderLoginComponent = () => {
    switch (userMeFetchState.fetchState) {
      case FetchStatus.DEFAULT:
      case FetchStatus.LOADING:
        return <Loading />;
      case FetchStatus.ERROR:
        return <div>Error</div>;
      case FetchStatus.SUCCESS:
        return <Loading />;
      default:
        return;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Seba's choice</h2>
      <div className={styles.content}>
        {renderLoginComponent()}
      </div>
    </div>
  );
}

const mapStateToProps = (state: StateProps): StateProps => ({
  user: state.user,
  userMeFetchState: state.userMeFetchState,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
        requestUserMe
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
