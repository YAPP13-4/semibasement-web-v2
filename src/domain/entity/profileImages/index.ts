import { Entity } from 'domain/entity';

export class ProfileImages extends Entity {
	constructor(public profileImg: string, public backgroundImg: string) {
		super();
	}
}
