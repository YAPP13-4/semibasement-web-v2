import React from 'react';
import { PlayerState } from 'presentation/redux/player';

const styles = require('./styles.scss');

type Props = {
  togglePlay: () => void;
  musicPlayer: PlayerState;
}

export const PlayerController: React.FC<Props> = ({
  togglePlay,
  musicPlayer
}) => {
  return (
    <div className={ styles.wrap }>
      <span>앞으로 가기</span>
      {
        musicPlayer.isPlaying ? (
          <span onClick={ togglePlay }>일시정지</span>
        ) : (
          <span onClick={ togglePlay }>재생</span>
        )
      }
      
    </div>
  )
}
