import { Entity } from 'domain/entity';
import { Music } from 'domain/entity/music';

export class RegisterMusic extends Entity {
	constructor(public music: Music, public url: string, public lyrics: string) {
		super();
	}
}
