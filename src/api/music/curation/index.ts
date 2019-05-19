import { List } from 'immutable';
import { Music } from 'domain/entity/music';
import { requestGET } from 'application/api';
import { CurationMusicMapper } from './mapper';

export class MusicCuratingListApiProvider {
  public get = (): Promise<List<Music>> =>
    requestGET('/musics/seba-choice')
      .then(res => {
        return res.data;
      })
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      .then((data: any[]) => {
        return List(
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          data.map((music: any) => {
            return new CurationMusicMapper().fromJson(music);
          }),
        );
      });
}
