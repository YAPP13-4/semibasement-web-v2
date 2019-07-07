import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Music } from 'domain/entity/music';
import { PlayerStart, onPlay } from 'presentation/redux/player/actions';
import { PlayerStateProps } from 'presentation/redux/player/reducer';
import { PlayerController } from './controller';
const styles = require('./styles.scss');

type StateProps = {
  musicPlayer: PlayerStateProps
}

type DispatchProps = {
  onPlay: (music: Music) => PlayerStart;
}

type Props = DispatchProps & StateProps;
export const CLIENT_ID = 'a281614d7f34dc30b665dfcaa3ed7505';

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
    console.log('toggle');
    const { audioElement } = this;
    const { musicPlayer } = this.props;
    
    console.log('audio element', audioElement,'isPlaying',musicPlayer.isPlaying);
    if(musicPlayer.isPlaying) {
      audioElement.pause();
    }

    audioElement.play();
  }
}

const mapStateToProps = (state: StateProps): StateProps => ({
  musicPlayer: state.musicPlayer
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPlay: (music: Music) => dispatch(onPlay(music))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
