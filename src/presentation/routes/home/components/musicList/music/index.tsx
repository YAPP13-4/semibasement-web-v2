import React from 'react';
import { Music } from 'domain/entity/music';

const styles = require('./styles.scss');

type Props = {
  musicInfo: Music;
};

export const MusicPanel: React.FC<Props> = ({ musicInfo }) => {
  const { musician, music } = musicInfo;

  return (
    <div className={styles.wrapper}>
      <img src={music.artworkImg} />
      <div className={styles.title}>
        {music.title}
      </div> 
      <div className={styles.name}>
        {musician.name}
      </div>
    </div>
  );
};
