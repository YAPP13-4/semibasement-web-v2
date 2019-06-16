import React from 'react';
import { connect } from 'react-redux';
import { MusicPanel } from './music';
import { Music } from 'domain/entity/music';
import { SebaMusicState } from 'presentation/redux/getMusicInfo/reducer';
import { FetchResult } from 'presentation/redux/actionTypes';
import { FetchStatus } from 'presentation/redux/FetchStatus';
import { Loading } from 'presentation/components/loading';
const styles = require('./styles.scss');

type StateProps = {
  sebaMusic: SebaMusicState;
  sebaMusicFetchState: FetchResult;
};

type Props = StateProps;

const MusicList: React.FC<Props> = ({
  sebaMusic,
  sebaMusicFetchState
}) => { 
  const renderMusicComponent = () => {
    switch (sebaMusicFetchState.fetchState) {
      case FetchStatus.DEFAULT:
      case FetchStatus.LOADING:
        return <Loading />;
      case FetchStatus.ERROR:
        return <div>Error</div>;
      case FetchStatus.SUCCESS:
        return sebaMusic.data.map((music: Music) => <MusicPanel musicInfo={music} />);
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

const mapStateToProps = (state: StateProps): StateProps => ({
  sebaMusic: state.sebaMusic,
  sebaMusicFetchState: state.sebaMusicFetchState,
});

export default connect(
  mapStateToProps
)(MusicList);
