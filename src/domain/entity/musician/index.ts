import { Entity } from 'domain/entity';

export class MusicianInfo extends Entity {
	constructor(public musician: string, public musicianImg: string) {
		super();
	}
}
