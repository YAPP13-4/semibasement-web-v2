import React, { useEffect } from 'react';
import { RequestSebaMusic, requestSebaCurationMusicLists } from 'presentation/redux/getMusicInfo/actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MusicList from 'presentation/routes/home/components/musicList/index';

type DispatchProps = {
  requestSebaCurationMusicLists: RequestSebaMusic;
};

const SebaMusicContainer: React.FC<DispatchProps> = ({
  requestSebaCurationMusicLists
}) => {
  useEffect(() => {
    requestSebaCurationMusicLists();
  }, [
    requestSebaCurationMusicLists
  ])
  return(
    <MusicList />
  )
}
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
      requestSebaCurationMusicLists,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(SebaMusicContainer);
