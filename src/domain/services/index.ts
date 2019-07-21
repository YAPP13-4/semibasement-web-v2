import { RepositoryDependencies } from 'domain/repositories';
import { Music } from 'domain/entity/music';
import { List } from 'immutable';

export class SEBA {
  private repo: RepositoryDependencies;

  public constructor(repo: RepositoryDependencies) {
    this.repo = repo;
  }

  public getCurationMusicList = (): Promise<List<Music>> => {
    return this.repo.getCurationMusic().get();
  };
}
