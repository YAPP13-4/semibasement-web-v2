import { Entity } from 'domain/entity';
import { ProfileImages } from '../profileImages';
import { SnsAccount } from '../sns';

export class User extends Entity {
  private id: number;
  private name: string;
  private email: string;
  private sns: SnsAccount;
  private profileImages: ProfileImages;
  private createdAt: string;

  public constructor(
    id: number,
    name: string,
    email: string,
    sns: SnsAccount,
    profileImages: ProfileImages,
    createdAt: string,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.email = email;
    this.sns = sns;
    this.profileImages = profileImages;
    this.createdAt = createdAt;
  }
}
