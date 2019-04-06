import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { MusicCuratingListApiProvider } from 'application/api/music/curation';

export class CurationMusicRepository {
  private api: MusicCuratingListApiProvider;

  public constructor(api: MusicCuratingListApiProvider) {
    this.api = api;
  }

  public get = (): Promise<List<Music>> => {
    return this.api.get();
  };
}
