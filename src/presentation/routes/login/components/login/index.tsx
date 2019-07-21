import React from 'react';
import { User } from 'domain/entity/user';
const styles = require('./styles.scss');

type Props = {
  user: User;
  title: string;
};

export const Login: React.FC<Props> = ({
  user
}) => { 
  const renderLoginComponent = () => {
    if (user) {
      return (<div></div>);
    }
  }
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Seba's choice</h2>
      <div className={styles.content}>
        {renderLoginComponent()}
      </div>
    </div>
  );
}
