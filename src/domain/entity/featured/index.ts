import { Entity } from 'domain/entity';

export class Featured extends Entity {
	constructor(public type: string, public count: number) {
		super();
	}
}
