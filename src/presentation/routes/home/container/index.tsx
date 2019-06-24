import React, { useEffect } from 'react';
import * as getMusic from 'presentation/redux/getMusicInfo';
import { Dispatch, bindActionCreators, Action, Store } from 'redux';
import { useSelector, useDispatch } from 'react-redux'
import { MusicList } from 'presentation/routes/home/components/musicList/index';
import { FetchResult } from 'presentation/redux/actionTypes';
import { PlayerStart, onPlay } from 'presentation/redux/player/actions';
import { Music } from 'domain/entity/music';
import { ActionFunctionAny } from 'redux-actions';
import { StoreState } from 'presentation/redux/reducers';
import { Loading } from 'presentation/components/loading';

type DispatchProps = {
  fetch: ActionFunctionAny<Action>;
  onPlay: (music: Music) => PlayerStart
};

type StateProps = {
  sebaMusic: getMusic.SebaMusicState
};

type Props = DispatchProps & StateProps;

const SebaMusicContainer: React.FC<Props> = ({
  onPlay
}) => {
  const isLoading = useSelector((state: StoreState) => state.loading[getMusic.PREFIX]);
  const { musicList } = useSelector((state: StoreState) => state.sebaMusic);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusic.getMusicAction.fetch());
  }, [
    dispatch
  ])
  // TODO: (소영) 추후 플레이리스트가 늘어날 시 대비. 
  const onClickPlayMusic = (title: string) => (music: Music) => {
    console.log('t',title,music)
    return onPlay(music);
  }

  return(
    isLoading ? 
      <Loading /> : (
      <MusicList
        title={'Seba\'s choice'}
        musicList={musicList}
        onClickPlay={onClickPlayMusic('Seba\'s choice')}
      />
    )
  )
}

export default SebaMusicContainer;
