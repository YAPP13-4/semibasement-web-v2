import React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./styles.scss');
const getIntoBtn = require('../../../../assets/landing/get-into-button@2x.png');
const landingBgVideo = require('../../../../assets/landing/video.mp4');

export const LandingEntry: React.FC = () => {
  return (
    <div className={styles.Landing}>
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop>
          <source src={landingBgVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.buttonWrapper}>
        <Link to="/home">
          <img src={getIntoBtn} alt="mainBtn" />
        </Link>
      </div>
    </div>
  );
};
