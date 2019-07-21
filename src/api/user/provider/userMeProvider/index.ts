import { UserMeMapper } from 'application/api/user';
import { User } from 'domain/entity/user';
import { requestGET } from 'application/api';

export class UserMeProvider {
  public get = (): Promise<User> =>
    requestGET('/users/me')
      .then(res => {
        return res.data;
      })
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      .then((json: any) => {
        return new UserMeMapper().fromJson(json);
      });
}
