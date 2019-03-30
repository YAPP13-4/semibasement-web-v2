import React from 'react';
const styles = require('./styles.scss');
const logo = require('src/assets/logos/logo.svg');
type Props = {
	// userInfo:
};

export const Header: React.FC = () => (
	<header>
		<span>menu</span>
		<span>
			<a>
				<img src={logo} alt={logo} />
			</a>
		</span>
		<span>login</span>
	</header>
);
