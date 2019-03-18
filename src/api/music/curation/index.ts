import { List } from 'immutable';
import { Music } from 'domain/entity/music';
import { requestGET } from 'application/api';
import { CurationMusicMapper } from './mapper';

export class MusicCuratingListApiProvider {
	get = (): Promise<List<Music>> =>
		requestGET('seba-choice')
			.then(res => res.data)
			.then((data: Array<any>) =>
				List(
					data.map((music: any) => new CurationMusicMapper().fromJson(music)),
				),
			);
}
