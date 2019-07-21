import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Music } from 'domain/entity/music';
import { PlayerController } from './controller';
import { PlayerState, onPlay, onPause } from 'presentation/redux/player';
import { StoreState } from 'presentation/redux/reducers';
const styles = require('./styles.scss');

const CLIENT_KEY = process.env.CLIENT_KEY;

type StateProps = {
  musicPlayer: PlayerState
}

type DispatchProps = {
  onPlay: (music: Music) => any;
  onPause: () => void;
}

type Props = DispatchProps & StateProps;

class Player extends React.Component<Props> {
  private audioElement: HTMLAudioElement;
  
  constructor(props: Props) {
    super(props);
  }

  // componentDidMount() {
  //   const { audioElement } = this;
  //   const { musicPlayer } = this.props;

  //   musicPlayer.currentMusic ?  audioElement.play() : null;
  // }

  componentDidUpdate() {
    const { audioElement } = this;
    const { musicPlayer } = this.props;

    (musicPlayer.currentMusic && musicPlayer.isPlaying)?  audioElement.play() : audioElement.pause();
  }
  
  render() {
    return this.renderPlayer()
  }

  private testOnPlay = () => {
    console.log('hi')
  }

  private togglePlay = () => {
    console.log('togglePlay',this.props.musicPlayer.isPlaying)
    const { audioElement } = this;

    if (this.props.musicPlayer.isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  private renderPlayer = () => {
    console.log('renderPlayer', this.props);
    const { musicPlayer, onPause } = this.props;
    const { currentMusic } = musicPlayer;
    
    
    return currentMusic && (
      <div className={ styles.wrap }>
        <audio
          id="audio" 
          onEnded={this.testOnPlay}
          onLoadedMetadata={this.testOnPlay}
          onLoadStart={this.testOnPlay}
          onPause={onPause}
          onTimeUpdate={this.testOnPlay}
          onVolumeChange={this.testOnPlay}
          onPlay={this.testOnPlay}
          src={`${currentMusic.music.streamUrl}?client_id=${CLIENT_KEY}`}
          ref={ (node: HTMLAudioElement) => this.audioElement = node }
        />
        <PlayerController player={this.props.musicPlayer} togglePlay={ this.togglePlay } />
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): StateProps => ({
  musicPlayer: state.player
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPlay: (music: Music) => dispatch(onPlay.update(music)),
  onPause: () => dispatch(onPause.update())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
