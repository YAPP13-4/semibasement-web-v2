import React from 'react';
import Lottie from 'react-lottie';

const animationData = require('application/assets/loading/loading.json');

export const Loading: React.FC = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div>
			<Lottie options={defaultOptions} height={250} width={250} />
		</div>
	);
};
