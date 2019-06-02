import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { MusicCuratingListApiProvider } from 'application/api/music';

export class MusicCurationRepository {
  private api: MusicCuratingListApiProvider;

  public constructor(api: MusicCuratingListApiProvider) {
    this.api = api;
  }

  public get = (): Promise<List<Music>> => {
    return this.api.get();
  };
}
