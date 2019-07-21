import React from 'react';
import { Music } from 'domain/entity/music';

const styles = require('./styles.scss');

type Props = {
  musicInfo: Music;
  onClickPlay: (music: Music) => void;
};

export const MusicPanel: React.FC<Props> = ({ 
  musicInfo, 
  onClickPlay,
}) => {
  const { musician, music } = musicInfo;

  return (
    <div className={styles.wrapper}>
      <img src={music.artworkImg} onClick={ () => onClickPlay(musicInfo) } />
      <div className={styles.title}>
        {music.title}
      </div> 
      <div className={styles.name}>
        {musician.name}
      </div>
    </div>
  );
};
