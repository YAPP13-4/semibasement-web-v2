import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CLIENT_ID } from 'application/env';
import { Music } from 'domain/entity/music';
import { PlayerController } from './controller';
import { PlayerState, onPlay } from 'presentation/redux/player';
import { StoreState } from 'presentation/redux/reducers';
const styles = require('./styles.scss');

type StateProps = {
  musicPlayer: PlayerState
}

type DispatchProps = {
  onPlay: (music: Music) => any;
}

type Props = DispatchProps & StateProps;

class Player extends React.Component<Props> {
  private audioElement: HTMLAudioElement;
  
  constructor(props: Props) {
    super(props);
  }
  
  render() {
    return this.renderPlayer()
  }

  private testOnPlay = () => {
    console.log('hi')
  }

  private renderPlayer = () => {
    console.log('renderPlayer', this.props);
    const { musicPlayer } = this.props;
    const { currentMusic } = musicPlayer;
    
    return currentMusic && (
      <div className={ styles.wrap }>
        <audio
          id="audio" 
          onEnded={this.testOnPlay}
          onLoadedMetadata={this.testOnPlay}
          onLoadStart={this.testOnPlay}
          onPause={this.testOnPlay}
          onTimeUpdate={this.testOnPlay}
          onVolumeChange={this.testOnPlay}
          onPlay={this.testOnPlay}
          src={`${currentMusic.music.streamUrl}?client_id=${CLIENT_ID}`}
          ref={ (node: HTMLAudioElement) => this.audioElement = node }
        />
        <PlayerController togglePlay={ this.togglePlay } />
      </div>
    )
  }

  private togglePlay = () => {
    
    const { audioElement } = this;
    const { musicPlayer } = this.props;
    
    console.log('audio element', audioElement,'isPlaying',musicPlayer.isPlaying);
    if(musicPlayer.isPlaying) {
      audioElement.pause();
    }

    audioElement.play();
  }
}

const mapStateToProps = (state: StoreState): StateProps => {
  console.log('mapStateToProps',state)
  return {
    musicPlayer: state.player
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPlay: (music: Music) => dispatch(onPlay.update(music))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
