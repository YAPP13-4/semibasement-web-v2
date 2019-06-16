import React from 'react';
import { connect } from 'react-redux';
import { MusicPanel } from './music';
import { Music } from 'domain/entity/music';
import { FetchResult } from 'presentation/redux/actionTypes';
import { FetchStatus } from 'presentation/redux/FetchStatus';
import { Loading } from 'presentation/components/loading';
import { List } from 'immutable';
const styles = require('./styles.scss');

type Props = {
  musicList: List<Music>;
  musicFetchState: FetchResult;
};

export const MusicList: React.FC<Props> = ({
  musicList,
  musicFetchState
}) => { 
  const renderMusicComponent = () => {
    switch (musicFetchState.fetchState) {
      case FetchStatus.DEFAULT:
      case FetchStatus.LOADING:
        return <Loading />;
      case FetchStatus.ERROR:
        return <div>Error</div>;
      case FetchStatus.SUCCESS:
        return musicList.map((music: Music) => <MusicPanel musicInfo={music} />);
      default:
        return;
    }
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
