import { Entity } from 'domain/entity';
import { ProfileImages } from '../profileImages';
import { SnsAccount } from '../sns';

export class User extends Entity {
	constructor(
		public id: number,
		public name: string,
		public email: string,
		public sns: SnsAccount,
		public profileImages: ProfileImages,
		public createdAt: string,
	) {
		super();
	}
}
