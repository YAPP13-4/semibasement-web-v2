import React, { useEffect } from 'react';
import { RequestSebaMusic, requestSebaCurationMusicLists } from 'presentation/redux/getMusicInfo/actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MusicList } from 'presentation/routes/home/components/musicList/index';
import { SebaMusicState } from 'presentation/redux/getMusicInfo/reducer';
import { FetchResult } from 'presentation/redux/actionTypes';

type DispatchProps = {
  requestSebaCurationMusicLists: RequestSebaMusic;
};

type StateProps = {
  sebaMusic: SebaMusicState;
  sebaMusicFetchState: FetchResult;
};

type Props = DispatchProps & StateProps;

const SebaMusicContainer: React.FC<Props> = ({
  sebaMusic,
  sebaMusicFetchState,
  requestSebaCurationMusicLists
}) => {
  useEffect(() => {
    requestSebaCurationMusicLists();
  }, [
    requestSebaCurationMusicLists
  ])
  return(
    <MusicList
      musicList={sebaMusic.data}
      musicFetchState={sebaMusicFetchState}
    />
  )
}
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
      requestSebaCurationMusicLists,
    },
    dispatch,
  );
const mapStateToProps = (state: StateProps): StateProps => ({
  sebaMusic: state.sebaMusic,
  sebaMusicFetchState: state.sebaMusicFetchState,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SebaMusicContainer);
