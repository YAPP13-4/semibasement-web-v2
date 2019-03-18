import { CurationMusicRepository } from './music/curation';
import { MusicCuratingListApiProvider } from 'application/api/music/curation';

export class RepositoryDependencies {
	constructor(
		public curationMusic: CurationMusicRepository = new CurationMusicRepository(
			new MusicCuratingListApiProvider(),
		),
	) {}
}
