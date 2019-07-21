import React, { useEffect } from 'react';
import * as userMe from 'presentation/redux/userMe';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from 'presentation/routes/login/components/login';
import { StoreState } from 'presentation/redux/reducers';
import { ActionFunctionAny } from 'redux-actions';
import { Action } from 'redux';
import { LandingEntry } from 'presentation/routes/landing/entry';

type DispatchProps = {
  fetch: ActionFunctionAny<Action>;
};

type StateProps = {
  userMe: userMe.UserMeState;
};

type Props = DispatchProps & StateProps;

const UserMeContainer: React.FC<Props> = () => {
  const { user } = useSelector((state: StoreState) => state.userMe);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userMe.getUserMe.fetch());
  }, [
    dispatch
  ]);

  return (
    !user ? <Login user={user} title="Seba's Choice Login"/> : <LandingEntry/>
  )
}

export default UserMeContainer;
