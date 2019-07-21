import { MusicRepositoryDependencies } from 'domain/repositories';
import { Music } from 'domain/entity/music';
import { List } from 'immutable';

export class SEBA {
  private repo: MusicRepositoryDependencies;

  public constructor(repo: MusicRepositoryDependencies) {
    this.repo = repo;
  }

  public getCurationMusicList = (): Promise<List<Music>> => {
    return this.repo.getCurationMusic().get();
  };
}
