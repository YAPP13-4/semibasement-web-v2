import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { MusicCuratingListApiProvider } from 'application/api/music/curation';

export class CurationMusicRepository {
	constructor(private api: MusicCuratingListApiProvider) {}
	get = (): Promise<List<Music>> => this.api.get();
}
