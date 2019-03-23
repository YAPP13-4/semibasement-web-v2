import { Entity } from 'domain/entity';

export class MusicInfo extends Entity {
	constructor(
		public title: string,
		public description: string,
		public artworkImg: string,
		public duration: number,
		public streamUrl: string,
		public playCount: number,
		public createdAtSoundCloud: Date,
		public createdAt: Date,
	) {
		super();
	}
}
