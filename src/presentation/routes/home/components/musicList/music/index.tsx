import React from 'react';
import { Music } from 'domain/entity/music';

type Props = {
  musicInfo: Music;
};

export const MusicPanel: React.FC<Props> = ({ musicInfo }) => {
  const { musician, music } = musicInfo;

  return (
    <>
      <img>thumbnail</img>
      <section>
        <div>{music.title}</div>
        <div>{musician.name}</div>
      </section>
    </>
  );
};
