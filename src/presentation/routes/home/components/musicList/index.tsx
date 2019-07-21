import React from 'react';
import { connect } from 'react-redux';
import { MusicPanel } from './music';
import { Music } from 'domain/entity/music';
import { List } from 'immutable';
const styles = require('./styles.scss');

type Props = {
  musicList: List<Music>;
  onClickPlay: (music: Music) => any;
  title: string;
};

export const MusicList: React.FC<Props> = ({
  musicList,
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

const mapStateToProps = (state: StateProps): StateProps => ({
  sebaMusic: state.sebaMusic,
  sebaMusicFetchState: state.sebaMusicFetchState,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      requestSebaCurationMusicLists,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MusicList);
