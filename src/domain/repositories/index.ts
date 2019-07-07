import { MusicCuratingListApiProvider } from 'application/api/music';
import { MusicCurationRepository } from 'application/domain/repositories/music';
import { UserMeRepository } from './user/userMeRepository';
import { UserMeProvider } from 'application/api/user';

export class MusicRepositoryDependencies {
  private curationMusic: MusicCurationRepository;

  public constructor() {
    this.curationMusic = new MusicCurationRepository(new MusicCuratingListApiProvider());
  }

  public getCurationMusic = () => this.curationMusic;
}

export class UserRepositoryDependencies {
  private userMe : UserMeRepository;

  public constructor() {
    this.userMe = new UserMeRepository(new UserMeProvider());
  }

  public getUserMe = () => this.userMe;
}
