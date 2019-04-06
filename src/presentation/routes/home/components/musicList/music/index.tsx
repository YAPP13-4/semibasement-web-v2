import React from 'react';
import { Music } from 'domain/entity/music';

type Props = {
	music: Music;
};

export const MusicPanel: React.FC<Props> = ({ music }) => {
	const { musicInfo, musician } = music;

	return (
		<>
			<img>thumbnail</img>
			<section>
				<div>{musicInfo.title}</div>
				<div>{musician.musician}</div>
			</section>
		</>
	);
};
