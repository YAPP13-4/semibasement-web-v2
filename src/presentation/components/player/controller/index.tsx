import React from 'react';

const styles = require('./styles.scss');

type Props = {
  togglePlay: () => void;
}

export const PlayerController: React.FC<Props> = ({
  togglePlay,
}) => {
  return (
    <div className={ styles.wrap }>
      <span>앞으로 가기</span>
      <span onClick={ togglePlay }>일시정지</span>
    </div>
  )
}
