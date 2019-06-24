import React from 'react';
import { MusicPanel } from './music';
import { Music } from 'domain/entity/music';
import { FetchResult } from 'presentation/redux/actionTypes';
import { FetchStatus } from 'presentation/redux/FetchStatus';
import { Loading } from 'presentation/components/loading';
import { List } from 'immutable';
import { PlayerStart } from 'presentation/redux/player/actions';
const styles = require('./styles.scss');

type Props = {
  musicList: List<Music>;
  // musicFetchState: FetchResult;
  onClickPlay: (music: Music) => PlayerStart;
  title: string;
};

export const MusicList: React.FC<Props> = ({
  musicList,
  // musicFetchState,
  onClickPlay,
}) => { 
  const renderMusicComponent = () => {
    
    return musicList.map((music: Music) => (
      <MusicPanel 
        key={music.id}  
        onClickPlay={onClickPlay}  
        musicInfo={music} 
      />
    ));
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Seba's choice</h2>
      <div className={styles.content}>
        {renderMusicComponent()}
      </div>
    </div>
  );
}
