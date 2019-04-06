import React from 'react';
const styles = require('./styles.scss');
const logo = require('application/assets/logos/logo.png');

type Props = {
	// userInfo:
};

export const Header: React.FC = () => (
	<header className={styles.wrapper}>
		<div className={styles.left}>menu</div>
		<div className={styles.center}>
			<a>
				<img src={logo} alt={logo} />
			</a>
		</div>
		<div className={styles.right}>
			<a>Sign In / Sign Up</a>
		</div>
	</header>
);
