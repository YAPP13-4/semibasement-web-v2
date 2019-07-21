import { UserMeProvider } from 'application/api/user';
import { User } from 'domain/entity/user';

export class UserMeRepository {
  private api: UserMeProvider;

  public constructor(api: UserMeProvider) {
    this.api = api;
  }

  public get = (): Promise<User> => {
    return this.api.get();
  };
}
