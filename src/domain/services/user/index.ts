import { UserRepositoryDependencies } from 'domain/repositories';
import { User } from 'domain/entity/user';

export class UserService {
  private repo: UserRepositoryDependencies;

  public constructor(repo: UserRepositoryDependencies) {
    this.repo = repo;
  }

  public getUserMe = (): Promise<User> => {
    return this.repo.getUserMe().get();
  };
}
