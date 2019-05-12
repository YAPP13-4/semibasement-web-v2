import React from 'react';

const styles = require('./styles.scss');
const logo = require('application/assets/logos/logo.png');

type Props = {
  // userInfo:
};

export const Header: React.FC = () => (
  <header className={styles.wrapper}>
    <div className={styles.left}>
      <span />
    </div>
    <div className={styles.center}>
      <a>
        <img src={logo} alt={logo} />
      </a>
    </div>
    <div className={styles.right}>
      <a className={`${styles.btn} ${styles.signIn}`}>Sign In</a>
      <a className={`${styles.btn} ${styles.signUp}`}>Sign Up</a>
    </div>
  </header>
);
