import React, { useEffect } from 'react';
import * as getMusic from 'presentation/redux/getMusicInfo';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux'
import { MusicList } from 'presentation/routes/home/components/musicList/index';
import { onPlay } from 'presentation/redux/player';
import { Music } from 'domain/entity/music';
import { ActionFunctionAny } from 'redux-actions';
import { StoreState } from 'presentation/redux/reducers';
import { Loading } from 'presentation/components/loading';

type DispatchProps = {
  fetch: ActionFunctionAny<Action>;
};

type StateProps = {
  sebaMusic: getMusic.SebaMusicState
};

type Props = DispatchProps & StateProps;

const SebaMusicContainer: React.FC<Props> = () => {
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
    return dispatch(onPlay.update(music))
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
