import React, { useEffect } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Login } from 'presentation/routes/login/components/login';
import { UserMeState } from 'presentation/redux/userMe/reducer';
import { FetchResult } from 'presentation/redux/actionTypes';
import { RequestUserMe, requestUserMe } from 'presentation/redux/userMe/actions';

type DispatchProps = {
  requestUserMe: RequestUserMe;
};

type StateProps = {
  userMe: UserMeState;
  userMeFetchState: FetchResult;
};

type Props = DispatchProps & StateProps;

const UserMeContainer: React.FC<Props> = ({
  userMe,
  userMeFetchState,
  requestUserMe
}) => {
  useEffect(() => {
    requestUserMe();
  }, [
    requestUserMe
  ])
  return(
    <Login
      user={userMe.data}
      userMeFetchState={userMeFetchState}
    />
  )
}
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
      requestUserMe,
    },
    dispatch,
  );
const mapStateToProps = (state: StateProps): StateProps => ({
  userMe: state.userMe,
  userMeFetchState: state.userMeFetchState,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMeContainer);
