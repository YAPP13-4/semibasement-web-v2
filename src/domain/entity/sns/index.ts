import { Entity } from 'domain/entity';

export class SnsAccount extends Entity {
  constructor(public snsFacebook: string = null, public snsInstagram: string = null, public snsTwitter: string = null) {
    super();
  }
}
