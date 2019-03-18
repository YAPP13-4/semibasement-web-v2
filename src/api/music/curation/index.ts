import { List } from 'immutable';
import { Music } from 'domain/entity/music';
import { requestGET } from 'application/api';
import { CurationMusicMapper } from './mapper';

export class MusicCuratingListApiProvider {
	get = (): Promise<List<Music>> =>
		requestGET('seba-choice').then((result: any) =>
			List.of(
				result.data.map((res: any) => new CurationMusicMapper().fromJson(res)),
			),
		);
}
