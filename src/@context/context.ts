import { SEBA } from 'domain/services/music';
import { MusicRepositoryDependencies, UserRepositoryDependencies } from 'domain/repositories';
import { UserService } from 'domain/services/user';

export class MusicContext {
  public service: SEBA;

  constructor() {
    this.service = new SEBA(new MusicRepositoryDependencies());
  }
}

export class UserContext {
  public service: UserService;

  constructor() {
    this.service = new UserService(new UserRepositoryDependencies());
  }
}