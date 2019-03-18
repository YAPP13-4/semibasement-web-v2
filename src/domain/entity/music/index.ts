import { Entity } from 'domain/entity';
import { MusicianInfo } from 'domain/entity/musician';
import { MusicInfo } from 'domain/entity/musicInfo';

export class Music extends Entity {
	constructor(
		public id: number,
		public musician: MusicianInfo,
		public music: MusicInfo,
	) {
		super();
	}
}
