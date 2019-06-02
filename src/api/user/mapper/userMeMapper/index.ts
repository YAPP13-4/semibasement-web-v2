import { User } from 'domain/entity/user';
import { SnsAccount } from 'domain/entity/sns';
import { ProfileImages } from 'domain/entity/profileImages';

type UserMeResponse = {
  id: number,
  name: string,
  email: string,
  snsAccount: SnsAccount,
  profileImages: ProfileImages,
  createdAt: string,
}

export class UserMeMapper {
  public fromJson = (json: UserMeResponse): User => {
    return new User(
      json.id,
      json.name,
      json.email,
      json.snsAccount,
      json.profileImages,
      json.createdAt,
    );
  };
}
