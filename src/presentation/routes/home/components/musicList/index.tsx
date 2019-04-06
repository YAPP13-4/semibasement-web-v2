import React from 'react';
import { MusicPanel } from './music';

export class MusicList extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<>
				<h2>Seba's choice</h2>
				<MusicPanel />
			</>
		);
	}
}
